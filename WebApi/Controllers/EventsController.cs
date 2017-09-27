﻿using JsonApiDotNetCore.Controllers;
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
    public class EventsController : JsonApiController<Event>
    {
        IEventService eventService;

        public EventsController(IJsonApiContext jsonApiContext,
                                IResourceService<Event, int> resourceService,
                                ILoggerFactory loggerFactory,
                                IEventService eventService) : base(jsonApiContext, resourceService, loggerFactory)
        {
            this.eventService = eventService;
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

        [Authorize]
        [HttpPost]
        public override async Task<IActionResult> PostAsync([FromBody] Event entity)
        {
            return await base.PostAsync(entity);
        }

        [Authorize]
        [HttpPatch("{id}")]
        public override Task<IActionResult> PatchAsync(int id, [FromBody] Event entity)
        {
            return base.PatchAsync(id, entity);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public override async Task<IActionResult> DeleteAsync(int id)
        {
            return await base.DeleteAsync(id);
        }

        [HttpPost("[action]")]
        //[Authorize]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Update()
        {
            try
            {
                await eventService.Update();
            }
            catch (Exception)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}