using System.Threading.Tasks;
using Models;

namespace Service
{
    public interface IEventService : IEntityService<Event>
    {
        Task Update();
    }
}
