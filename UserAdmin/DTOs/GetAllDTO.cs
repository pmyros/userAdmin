using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.DTOs
{
    public class GetAllDTO
    {
        public int totalCount { get; set; }
        public IEnumerable<dynamic> items { get; set; }
    }
}
