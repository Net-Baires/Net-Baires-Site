using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;
using Service;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class MembersController : EntityController<Member>
    {
        IMemberService memberService;

        public MembersController(IMemberService memberService) : base(memberService)
        {
            this.memberService = memberService;
        }

        [HttpGet]
        public override IQueryable<Member> Get()
        {
            return base.Get();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Member), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Get(int id)
        {
            return base.Get(id);
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(typeof(Member), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Post([FromBody] Member entity)
        {
            return base.Post(entity);
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(Member), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Put(int id, [FromBody] Member entity)
        {
            return base.Put(id, entity);
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(Member), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Delete(int id)
        {
            return base.Delete(id);
        }
    }
}
