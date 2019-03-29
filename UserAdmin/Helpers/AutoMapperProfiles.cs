using AutoMapper;
using UserAdmin.DTOs;
using UserAdmin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdmin.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<TarifaDevengadaDTO, TarifaDevengada>().ReverseMap();
            CreateMap<TarifaDevengadaGET, TarifaDevengada>().ReverseMap();
            CreateMap<TarifaDevengadaPOST, TarifaDevengada>().ReverseMap();
            CreateMap<MiembroCompensadorDTO, TarifaDevengada>().ReverseMap();
            CreateMap<UsuarioDTO, Usuario>().ReverseMap();
        }
    }
}
