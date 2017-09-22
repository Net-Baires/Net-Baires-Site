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
    public class SponsorsController : EntityController<Sponsor>
    {
        ISponsorService sponsorService;

        public SponsorsController(ISponsorService sponsorService) : base(sponsorService)
        {
            this.sponsorService = sponsorService;
        }

        [HttpGet]
        public override IQueryable<Sponsor> Get()
        {
            return base.Get();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Sponsor), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Get(int id)
        {
            return base.Get(id);
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(typeof(Sponsor), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Post([FromBody] Sponsor entity)
        {
            return base.Post(entity);
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(Sponsor), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Put(int id, [FromBody] Sponsor entity)
        {
            return base.Put(id, entity);
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(Sponsor), (int)HttpStatusCode.OK)]
        public override Task<IActionResult> Delete(int id)
        {
            return base.Delete(id);
        }
    }
}
