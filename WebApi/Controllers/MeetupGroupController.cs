using JsonApiDotNetCore.Controllers;
using JsonApiDotNetCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models;
using Service;
using System;
using System.Net;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class MeetupGroupsController : JsonApiController<MeetupGroup>
    {
        IMeetupGroupService meetupGroupService;

        public MeetupGroupsController(IJsonApiContext jsonApiContext,
                                IResourceService<MeetupGroup, int> resourceService,
                                ILoggerFactory loggerFactory,
                                IMeetupGroupService meetupGroupService) : base(jsonApiContext, resourceService, loggerFactory)
        {
            this.meetupGroupService = meetupGroupService;
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
        public override async Task<IActionResult> PostAsync([FromBody] MeetupGroup entity)
        {
            return await base.PostAsync(entity);
        }

        [Authorize("admin")]
        [HttpPatch("{id}")]
        public override Task<IActionResult> PatchAsync(int id, [FromBody] MeetupGroup entity)
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
