using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.Repositories
{
    public interface IDataRepository<T> where T : class
    {
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<T> SaveAsync(T entity);
        IQueryable<T> GetAll();
        Task<T> FindAsync(int id);
        Task<int> SaveChangesAsync();
    }
}
