using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserAdmin.DTOs;
using UserAdmin.Models;
using UserAdmin.Repositories;

namespace UserAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarifaDevengadaController : ControllerBase
    {
        private readonly ngNetCoreApiDBContext _context;
        private readonly IMapper _mapper;
        private readonly IDataRepository<TarifaDevengada> _repo;

        public TarifaDevengadaController(ngNetCoreApiDBContext context, IMapper mapper, IDataRepository<TarifaDevengada> repo)
        {
            _context = context;
            _mapper = mapper;
            _repo = repo;
        }

        // GET: api/TarifaDevengada
        [HttpGet]
        [Route("GetAll")]
        public async Task<IEnumerable<TarifaDevengada>> GetAllTarifasDevengadas()
        {
            return await _context.TarifaDevengada.ToListAsync();
        }

        //[HttpGet]
        //[Route("GetAll")]
        //public dynamic GetAllTarifasDevengadas(DataSourceLoadOptions loadOptions)
        //{
        //    var data = DataSourceLoader.Load(_context.TarifaDevengada.ToList(), loadOptions);
        //    return data;
        //}


        // GET: api/TarifaDevengada/5
        [HttpGet]
        [Route("GetByID/{id}")]
        public async Task<IActionResult> GetTarifaDevengadaByID([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tarifaDevengada = await _context.TarifaDevengada.FindAsync(id);

            if (tarifaDevengada == null)
            {
                return NotFound();
            }

            return Ok(tarifaDevengada);
        }

        [HttpGet]
        [Route("GetByMC/{mc}")]
        public async Task<IActionResult> GetTarifaDevengadaByMC([FromRoute] string mc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tarifasDevengadas = await _context.TarifaDevengada.Where(a => a.MiembroCompensadorCodigo == mc).ToListAsync();

            if (tarifasDevengadas == null)
            {
                return NotFound();
            }

            return Ok(tarifasDevengadas);
        }


        [HttpGet]
        [Route("GetMiembrosCompensadores")]
        public async Task<IActionResult> GetMiembrosCompensadores()
        {
            //var tarifasDevengadas = await _context.TarifaDevengada.Select(a => a.MiembroCompensadorCodigo).ToListAsync();
            var results = await _context.TarifaDevengada.GroupBy(a => new { a.MiembroCompensadorCodigo, a.MiembroCompensadorDescripcion })
                   .Select(grp => new MiembroCompensadorDTO { MiembroCompensadorCodigo = grp.Key.MiembroCompensadorCodigo, MiembroCompensadorDescripcion = grp.Key.MiembroCompensadorDescripcion })
                   .OrderBy(a => a.MiembroCompensadorDescripcion)
                   .ToListAsync();


            return Ok(results);
        }

        [HttpGet]
        [Route("GetCuentasCompensacionByMC/{mc}")]
        public async Task<IActionResult> GetCuentasCompensacionByMC([FromRoute] string mc)
        {
            //var tarifasDevengadas = await _context.TarifaDevengada.Select(a => a.MiembroCompensadorCodigo).ToListAsync();
            var results = await _context.TarifaDevengada.GroupBy(a => new { a.CuentaCompensacionCodigo, a.CuentaCompensacionDescripcion, a.MiembroCompensadorDescripcion, a.MiembroCompensadorCodigo })
                   .Select(grp => new CuentaCompensacionDTO
                   {
                       CuentaCompensacionDescripcion = grp.Key.CuentaCompensacionDescripcion
                   ,
                       CuentaCompensacionCodigo = grp.Key.CuentaCompensacionCodigo
                   ,
                       MiembroCompensadorCodigo = grp.Key.MiembroCompensadorCodigo
                   ,
                       MiembroCompensadorDescripcion = grp.Key.MiembroCompensadorDescripcion
                   })
                   .Where(a => a.MiembroCompensadorCodigo == mc)
                   .OrderBy(a => a.CuentaCompensacionDescripcion)
                   .ToListAsync();


            return Ok(results);
        }


        // PUT: api/TarifaDevengada/5
        [HttpPut]
        [Route("Update/{id}")]
        public async Task<IActionResult> PutTarifaDevengada([FromRoute] int id, [FromBody] TarifaDevengada tarifaDevengada)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tarifaDevengada.TarifaDevengadaId)
            {
                return BadRequest();
            }

            _context.Entry(tarifaDevengada).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TarifaDevengadaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TarifaDevengada
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> PostTarifaDevengada([FromBody] TarifaDevengadaPOST tarifaDevengada)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var preTarifa = _mapper.Map<TarifaDevengada>(tarifaDevengada);
            _repo.Add(preTarifa);
            var saveTarifa = await _repo.SaveAsync(preTarifa);
            var tarifaResponse = _mapper.Map<TarifaDevengadaDTO>(saveTarifa);

            return StatusCode(201, new { tarifaResponse });
        }

        // DELETE: api/TarifaDevengada/5
        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> DeleteTarifaDevengada([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tarifaDevengada = await _context.TarifaDevengada.FindAsync(id);
            if (tarifaDevengada == null)
            {
                return NotFound();
            }

            _context.TarifaDevengada.Remove(tarifaDevengada);
            await _context.SaveChangesAsync();

            return Ok(tarifaDevengada);
        }

        private bool TarifaDevengadaExists(int id)
        {
            return _context.TarifaDevengada.Any(e => e.TarifaDevengadaId == id);
        }
    }
}