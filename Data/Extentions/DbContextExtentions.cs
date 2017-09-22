using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Models;
using System.Linq;

namespace Data.Extentions
{
    public static class DbContextExtentions
    {
        public static EntityEntry<T> AttachToOrGet<T>(this DbContext context, T entity) where T : class, IEntity
        {
            var entry = entity.Id != default(int) ? context.ChangeTracker.Entries<T>().FirstOrDefault(e => e.Entity.Id == entity.Id) : null;
            if (entry == null)
            {
                context.Set<T>().Attach(entity);
                entry = context.Entry(entity);
            }

            return entry;
        }
    }
}
