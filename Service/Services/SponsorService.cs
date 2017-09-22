using Data;
using Models;

namespace Service
{
    public class SponsorService : EntityService<Sponsor>, ISponsorService
    {
        public SponsorService(ApiContext db) : base(db)
        {
        }
    }
}
