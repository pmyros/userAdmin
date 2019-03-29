using Microsoft.EntityFrameworkCore;
using UserAdmin.Models;
using UserAdmin.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.Services
{
    public class TarifaDevengadaServices : ITarifaDevengadaService
    {
        IDataRepository<TarifaDevengada> _repo;
        public TarifaDevengadaServices(IDataRepository<TarifaDevengada> repo)
        {
            _repo = repo; 
        }

        public void Add(TarifaDevengada entity)
        {
            _repo.Add(entity);
        }

        public void Delete(TarifaDevengada entity)
        {
            _repo.Delete(entity);
        }

        public Task<TarifaDevengada> FindAsync(int id)
        {
            return _repo.FindAsync(id);
        }

        public IQueryable<TarifaDevengada> GetAll()
        {
            return _repo.GetAll();
        }

        public Task<TarifaDevengada> SaveAsync(TarifaDevengada entity)
        {
            return _repo.SaveAsync(entity);
        }

        public Task<int> SaveChangesAsync()
        {
            return _repo.SaveChangesAsync();
        }

        public void Update(TarifaDevengada entity)
        {
            _repo.Update(entity);
        }

        async Task<List<TarifaDevengada>> ITarifaDevengadaService.GetTarifaDevengadaByMC(string mc)
        {
            return await _repo.GetAll().Where(a => a.MiembroCompensadorCodigo == mc).ToListAsync();
        }
    }
}
