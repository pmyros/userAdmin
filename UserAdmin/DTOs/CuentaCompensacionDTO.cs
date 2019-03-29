using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.DTOs
{
    public class CuentaCompensacionDTO
    {
        public string CuentaCompensacionCodigo { get; set; }
        public string CuentaCompensacionDescripcion { get; set; }
        public string MiembroCompensadorCodigo { get; set; }
        public string MiembroCompensadorDescripcion { get; set; }
    }
}
