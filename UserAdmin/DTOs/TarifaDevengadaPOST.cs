﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.DTOs
{
    public class TarifaDevengadaPOST
    {
        public int TarifaDevengadaId { get; set; }
        public int ComisionId { get; set; }
        public string ComisionDetalle { get; set; }
        public int MiembroCompensadorId { get; set; }
        public string MiembroCompensadorCodigo { get; set; }
        public string MiembroCompensadorDescripcion { get; set; }
        public int CuentaFacturacionId { get; set; }
        public string CuentaFacturacionCodigo { get; set; }
        public string CuentaFacturacionDescripcion { get; set; }
        public int CuentaRegistroId { get; set; }
        public string CuentaRegistroCodigo { get; set; }
        public string CuentaRegistroDescripcion { get; set; }
        public int CuentaCompensacionId { get; set; }
        public string CuentaCompensacionCodigo { get; set; }
        public string CuentaCompensacionDescripcion { get; set; }
        public int? ContratoId { get; set; }
        public string ContratoDescripcion { get; set; }
        public int? ProductoId { get; set; }
        public string ProductoAlias { get; set; }
        public string ProductoDescripcion { get; set; }
        public string TipoRuedaDescripcion { get; set; }
        public string EjecucionDescripcion { get; set; }
        public string TipoOrdenDescripcion { get; set; }
        public decimal Cantidad { get; set; }
        public int MonedaId { get; set; }
        public string MonedaDescripcion { get; set; }
        public string MonedaCodigoIso { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Total { get; set; }
        public int EntidadId { get; set; }
        public string EntidadDescripcion { get; set; }
    }
}
