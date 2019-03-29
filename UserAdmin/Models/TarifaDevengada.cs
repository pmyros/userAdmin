using System;
using System.Collections.Generic;

namespace UserAdmin.Models
{
    public partial class TarifaDevengada
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
        public byte? TipoRuedaId { get; set; }
        public string TipoRuedaDescripcion { get; set; }
        public byte? EjecucionId { get; set; }
        public string EjecucionDescripcion { get; set; }
        public byte? TipoOrdenId { get; set; }
        public string TipoOrdenDescripcion { get; set; }
        public decimal Cantidad { get; set; }
        public int MonedaId { get; set; }
        public string MonedaDescripcion { get; set; }
        public string MonedaCodigoIso { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Total { get; set; }
        public int? OperacionCarteraId { get; set; }
        public int? OperacionCarteraNumero { get; set; }
        public int? TarifaId { get; set; }
        public int EntidadId { get; set; }
        public string EntidadDescripcion { get; set; }
        public bool? EsFacturable { get; set; }
        public decimal? Cotizacion { get; set; }
        public decimal? TotalMonedaBase { get; set; }
    }
}
