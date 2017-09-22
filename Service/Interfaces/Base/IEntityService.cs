using Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Service
{
    public interface IEntityService<T> where T : IEntity
    {
        Task<T> Add(T entity);
        Task<T> Get(int id);
        IQueryable<T> Get();
        Task<T> Modify(T entity);
        Task<T> Remove(int id);
        Task<T> Remove(T entity);
    }
}
