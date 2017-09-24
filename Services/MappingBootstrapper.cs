using AutoMapper;
using DataTypes;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public static class MappingBootstrapper
    {
        public static void ConfigureMappings()
        {
            MapPost();
        }

        private static void MapPost()
        {
            Mapper.CreateMap<Post, PostDTO>().ReverseMap();
        }
    }
}
