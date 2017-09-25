using JsonApiDotNetCore.Controllers;
using JsonApiDotNetCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models;
using Service;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class SponsorsController : JsonApiController<Sponsor>
    {
        ISponsorService sponsorService;

        public SponsorsController(IJsonApiContext jsonApiContext,
                                IResourceService<Sponsor, int> resourceService,
                                ILoggerFactory loggerFactory,
                                ISponsorService sponsorService) : base(jsonApiContext, resourceService, loggerFactory)
        {
            this.sponsorService = sponsorService;
        }

        public override async Task<IActionResult> GetAsync()
        {
            return await base.GetAsync();
        }

        public override async Task<IActionResult> GetAsync(int id)
        {
            return await base.GetAsync(id);
        }

        [Authorize]
        public override async Task<IActionResult> PostAsync([FromBody] Sponsor entity)
        {
            return await base.PostAsync(entity);
        }

        [Authorize]
        public override Task<IActionResult> PatchAsync(int id, [FromBody] Sponsor entity)
        {
            return base.PatchAsync(id, entity);
        }

        [Authorize]
        public override async Task<IActionResult> DeleteAsync(int id)
        {
            return await base.DeleteAsync(id);
        }
    }
}
