using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using System.Reflection;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace UserAdmin.Services
{

    public delegate void SpreadsheetRowCallback<T>(String sheetName, int rowNumber, T rowItem);

    public class SpreadSheetService
    {
        public static IEnumerable<T> ReadSpreadsheet<T>(Stream stream, string sheetName = null, int startRow = 1, CultureInfo culture = null)
            where T : new()
        {
            // Create the spreadsheet on the MemoryStream
            using (var document = SpreadsheetDocument.Open(stream, false))
            {
                var wbp = document.WorkbookPart;

                foreach (var wsp in wbp.WorksheetParts)
                {
                    var wspId = wbp.GetIdOfPart(wsp);

                    //wkp.Work
                    var sheet = wbp.Workbook.Sheets
                        .Elements<Sheet>()
                        .FirstOrDefault(s => wspId == s.Id)
                        ;

                    if (!String.IsNullOrEmpty(sheetName) && sheet.Name != sheetName)
                        continue;

                    foreach (var dSheet in wsp.Worksheet.Elements<SheetData>())
                    {
                        var firstRow = dSheet.Elements<Row>()
                            .Skip(startRow - 1)
                            .First()
                            ;

                        var getT = GetMatchingFunc<T>(document, firstRow, culture);

                        foreach (var row in dSheet.Elements<Row>().Skip(startRow))
                        {
                            yield return getT(row);
                        }
                    }
                }
            }
        }

        private static Func<Row, T> GetMatchingFunc<T>(SpreadsheetDocument document, Row firstRow, CultureInfo culture = null)
            where T : new()
        {
            var regex = new Regex(@"^\p{L}+");

            var stringTable = document.WorkbookPart
                .GetPartsOfType<SharedStringTablePart>()
                .FirstOrDefault()
                ;

            var column = firstRow.Elements<Cell>().Select(c => GetCellValue(c, stringTable)).ToList();

            var mapping = typeof(T)
                .GetProperties()
                .Select(x => new { pi = x, attr = x.GetCustomAttribute<ColumnAttribute>()?.Name ?? x.Name })
                .Where(x => x.attr != null)
                .Join(
                    firstRow.Elements<Cell>(),
                    h => h.attr,
                    c => GetCellValue(c, stringTable),
                    (h, c) => new { h.pi, h.attr, @ref = regex.Match(c.CellReference.Value).Value }
                    )
                .ToList()
                ;

            return newRow =>
            {
                T x = new T();

                var matches = mapping.Join(
                        newRow.Elements<Cell>(),
                        y => y.@ref,
                        c => regex.Match(c.CellReference.Value).Value,
                        (y, c) => new { y.pi, c }
                    );

                try
                {
                    foreach (var match in matches)
                    {
                        SetCellValue(x, match.pi, match.c, stringTable, culture);
                    }
                }
                catch (Exception)
                {
                    return default(T);
                }

                return x;
            }; ;
        }

        private static object SetCellValue(object x, PropertyInfo pi, Cell cell, SharedStringTablePart stringTable, CultureInfo culture = null)
        {
            if (cell.DataType != null)
            {
                switch (cell.DataType.Value)
                {
                    case CellValues.Boolean:
                        pi.SetValue(x, ChangeType(cell.InnerText == "0" ? true : false, pi.PropertyType, culture));
                        break;

                    case CellValues.Number:
                        pi.SetValue(x, ChangeType(cell.InnerText, pi.PropertyType, culture));
                        break;

                    case CellValues.Error:
                        pi.SetValue(x, ChangeType(cell.InnerText, pi.PropertyType, culture));
                        break;

                    case CellValues.SharedString:
                        pi.SetValue(x, ChangeType(stringTable.SharedStringTable.ElementAt(int.Parse(cell.InnerText)).InnerText, pi.PropertyType, culture));
                        break;

                    case CellValues.String:
                        pi.SetValue(x, ChangeType(cell.InnerText, pi.PropertyType, culture));
                        break;

                    case CellValues.InlineString:
                        pi.SetValue(x, ChangeType(cell.InnerText, pi.PropertyType, culture));
                        break;

                    case CellValues.Date:
                        pi.SetValue(x, ChangeType(DateTime.FromOADate(Convert.ToDouble(cell.InnerText)), pi.PropertyType, culture));
                        break;

                    default:
                        pi.SetValue(x, ChangeType(cell.InnerText, pi.PropertyType, culture));
                        break;
                }
            }
            else
            {
                pi.SetValue(x, ChangeType(cell.InnerText, pi.PropertyType, culture));
            }

            return x;
        }

        private static object ChangeType(object obj, Type type, CultureInfo culture = null)
        {
            culture = culture ?? CultureInfo.CurrentCulture;

            if (obj is string && type == typeof(TimeSpan))
            {
                var str = obj as string;

                if (!String.IsNullOrEmpty(str))
                {
                    str = str.PadLeft(culture.DateTimeFormat.ShortTimePattern.Length, '0');
                    if (DateTime.TryParseExact(str, culture.DateTimeFormat.ShortTimePattern, culture, DateTimeStyles.None, out DateTime temp))
                        return temp.TimeOfDay;

                    str = str.PadLeft(culture.DateTimeFormat.LongTimePattern.Length, '0');
                    if (DateTime.TryParseExact(str, culture.DateTimeFormat.LongTimePattern, culture, DateTimeStyles.None, out temp))
                        return temp.TimeOfDay;
                }

                return TimeSpan.Zero;
            }
            else if (obj is string && type == typeof(DateTime))
            {
                var str = obj as string;

                try
                {
                    return Convert.ChangeType(obj, type, culture);
                }
                catch
                {
                    if (!String.IsNullOrEmpty(str))
                    {
                        if (DateTime.TryParseExact(str, culture.DateTimeFormat.ShortDatePattern, culture, DateTimeStyles.None, out DateTime temp))
                            return temp;

                        if (DateTime.TryParseExact(str, culture.DateTimeFormat.LongDatePattern, culture, DateTimeStyles.None, out temp))
                            return temp;
                    }

                    return DateTime.MinValue;
                }
            }
            else if (obj is string && Nullable.GetUnderlyingType(type) != null)
            {
                try
                {
                    return ChangeType(obj, Nullable.GetUnderlyingType(type), culture);
                }
                catch
                {
                    return null;
                }
            }

            return Convert.ChangeType(obj, type, culture);
        }

        private static string GetCellValue(Cell cell, SharedStringTablePart stringTable)
        {
            if (cell.DataType != null)
            {
                switch (cell.DataType.Value)
                {
                    case CellValues.Boolean:
                        return cell.InnerText == "0" ? "FALSE" : "TRUE";

                    case CellValues.SharedString:
                        return stringTable.SharedStringTable.ElementAt(int.Parse(cell.InnerText)).InnerText;

                    case CellValues.Date:
                        return DateTime.FromOADate(Convert.ToDouble(cell.InnerText)).ToShortDateString();

                    case CellValues.Number:
                    case CellValues.Error:
                    case CellValues.InlineString:
                    case CellValues.String:
                    default:
                        return cell.InnerText;
                }
            }

            return cell.InnerText;
        }
    }
}

