using UserAdmin.Models;
using UserAdmin.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.Services
{
    public interface ITarifaDevengadaService : IDataRepository<TarifaDevengada>
    {
        Task<List<TarifaDevengada>> GetTarifaDevengadaByMC(string mc);
    }    
}
