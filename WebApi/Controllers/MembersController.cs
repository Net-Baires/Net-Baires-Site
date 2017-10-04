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
    public class MembersController : JsonApiController<Member>
    {
        IMemberService memberService;

        public MembersController(IJsonApiContext jsonApiContext,
                                IResourceService<Member, int> resourceService,
                                ILoggerFactory loggerFactory,
                                IMemberService memberService) : base(jsonApiContext, resourceService, loggerFactory)
        {
            this.memberService = memberService;
        }

        [HttpGet]
        public override async Task<IActionResult> GetAsync()
        {
            return await base.GetAsync();
        }

        [HttpGet("{id}")]
        public override async Task<IActionResult> GetAsync(int id)
        {
            return await base.GetAsync(id);
        }

        [Authorize("admin")]
        [HttpPost]
        public override async Task<IActionResult> PostAsync([FromBody] Member entity)
        {
            return await base.PostAsync(entity);
        }

        [Authorize("admin")]
        [HttpPatch("{id}")]
        public override Task<IActionResult> PatchAsync(int id, [FromBody] Member entity)
        {
            return base.PatchAsync(id, entity);
        }

        [Authorize("admin")]
        [HttpDelete("{id}")]
        public override async Task<IActionResult> DeleteAsync(int id)
        {
            return await base.DeleteAsync(id);
        }
    }
}
