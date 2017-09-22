using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;
using Service;
using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class EventsController : EntityController<Event>
    {
        IEventService eventService;

        public EventsController(IEventService eventService) : base(eventService)
        {
            this.eventService = eventService;
        }

        [HttpGet]
        public override IQueryable<Event> Get()
        {
            return base.Get();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Event), (int)HttpStatusCode.OK)]
        public override async Task<IActionResult> Get(int id)
        {
            return await base.Get(id);
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(typeof(Event), (int)HttpStatusCode.OK)]
        public override async Task<IActionResult> Post([FromBody] Event entity)
        {
            return await base.Post(entity);
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(Event), (int)HttpStatusCode.OK)]
        public override async Task<IActionResult> Put(int id, [FromBody] Event entity)
        {
            return await base.Put(id, entity);
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(Event), (int)HttpStatusCode.OK)]
        public override async Task<IActionResult> Delete(int id)
        {
            return await base.Delete(id);
        }

        [HttpPost("[action]")]
        [Authorize]
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
