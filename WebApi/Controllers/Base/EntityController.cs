using Microsoft.AspNetCore.Mvc;
using Models;
using Service;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    public abstract class EntityController<T> : Controller where T : IEntity
    {
        protected IEntityService<T> entityService;

        protected EntityController(IEntityService<T> entityService)
        {
            this.entityService = entityService;
        }

        [HttpGet]
        public virtual IQueryable<T> Get()
        {
            return entityService.Get();
        }

        [HttpGet("{id}")]
        public virtual async Task<IActionResult> Get(int id)
        {
            var entity = await entityService.Get(id);

            if (entity == null)
                return NotFound();

            return Ok(entity);
        }

        [HttpPost]
        public virtual async Task<IActionResult> Post([FromBody]T entity)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await entityService.Add(entity);

            return CreatedAtRoute("DefaultApi", new { id = entity.Id }, entity);
        }

        [HttpPut("{id}")]
        public virtual async Task<IActionResult> Put(int id, [FromBody]T entity)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (id != entity.Id)
                return BadRequest();

            var serverT = await entityService.Get(id);

            if (serverT == null)
            {
                await entityService.Add(entity);

                return CreatedAtRoute("DefaultApi", new { id = entity.Id }, entity);
            }

            var serverEntity = await entityService.Modify(entity);

            return Ok(serverEntity);
        }

        [HttpDelete("{id}")]
        public virtual async Task<IActionResult> Delete(int id)
        {
            var entity = await entityService.Remove(id);

            if (entity == null)
                return NotFound();

            return Ok(entity);
        }
    }
}
