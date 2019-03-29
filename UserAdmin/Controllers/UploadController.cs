using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using UserAdmin.DTOs;
using UserAdmin.Services;

namespace UserAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private IHostingEnvironment _hostingEnvironment;

        public UploadController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("UploadExcel")]
        public ActionResult UploadFile()
        {
            try
            {
                var file = Request.Form.Files[0];

                var culture = CultureInfo.CurrentCulture.Clone() as CultureInfo;
                culture.NumberFormat = NumberFormatInfo.InvariantInfo;
                culture.DateTimeFormat.ShortTimePattern = "HHmmss";

                var nuevos = SpreadSheetService
                    .ReadSpreadsheet<ArchivoDTO>(
                        file.OpenReadStream(),
                        culture: culture
                        )
                    .ToList()
                    ;

                using (var reader = new StreamReader(file.OpenReadStream()))
                {
                    var fileContent = reader.ReadToEnd();
                    var parsedContentDisposition = ContentDispositionHeaderValue.Parse(file.ContentDisposition);
                    var fileName = parsedContentDisposition.FileName;
                }
                return Ok(JsonConvert.SerializeObject(nuevos));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}