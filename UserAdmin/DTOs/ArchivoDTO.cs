using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.DTOs
{
    public class ArchivoDTO
    {       
        [Column("Comisión")]
        public int ComisionId { get; set; }
        [Column("Cód. ALyC")]
        public string MiembroCompensadorCodigo { get; set; }
        [Column("ALyC")]
        public string MiembroCompensadorDescripcion { get; set; }
        [Column("Cantidad")]
        public decimal Cantidad { get; set; }
        [Column("Fecha")]
        public DateTime Fecha { get; set; }
    }
}
