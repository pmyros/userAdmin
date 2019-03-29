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
    public class UsuariosController : ControllerBase
    {
        private readonly ngNetCoreApiDBContext _context;
        private readonly IMapper _mapper;
        private readonly IDataRepository<Usuario> _repo;

        public UsuariosController(ngNetCoreApiDBContext context, IMapper mapper, IDataRepository<Usuario> repo)
        {
            _context = context;
            _mapper = mapper;
            _repo = repo;
        }

        // GET: api/Usuario
        [HttpGet]
        [Route("GetAll")]
        public async Task<IEnumerable<Usuario>> GetAllUsuarios()
        {
            return await _context.Usuario.ToListAsync();
        }


        // GET: api/Usuario/5
        [HttpGet]
        [Route("GetByID/{id}")]
        public async Task<IActionResult> GetUsuarioByID([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }


        // PUT: api/Usuario/5
        [HttpPut]
        [Route("Update/{id}")]
        public async Task<IActionResult> PutUsuario([FromRoute] int id, [FromBody] Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuario.UsuarioID)
            {
                return BadRequest();
            }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
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

        // POST: api/Usuario
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> PostUsuario([FromBody] UsuarioDTO usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var preUsuario = _mapper.Map<Usuario>(usuario);
            _repo.Add(preUsuario);
            var saveUsuario = await _repo.SaveAsync(preUsuario);
            var usuarioResponse = _mapper.Map<UsuarioDTO>(saveUsuario);

            return StatusCode(201, new { usuarioResponse });
        }

        // DELETE: api/Usuario/5
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<IActionResult> DeleteUsuario([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            
            _context.Usuario.Remove(usuario);
            await _context.SaveChangesAsync();

            return Ok(usuario);
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuario.Any(e => e.UsuarioID == id);
        }
    }
}