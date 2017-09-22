using Data;
using Models;

namespace Service
{
    public class MemberService : EntityService<Member>, IMemberService
    {
        public MemberService(ApiContext db) : base(db)
        {
        }
    }
}
