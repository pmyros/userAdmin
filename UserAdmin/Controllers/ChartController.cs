using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using UserAdmin.Hubs;
using UserAdmin.Models;
using UserAdmin.TimerFeatures;

namespace UserAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartController : ControllerBase
    {
        private IHubContext<ChartHub> _hub;

        public ChartController(IHubContext<ChartHub> hub)
        {
            _hub = hub;
        }

        [HttpGet]
        [Route("GetChart")]
        public IActionResult Get()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("transferchartdata", GetData()));

            return Ok(new { Message = "Request chart Completed" });
        }

        [HttpGet]
        [Route("GetTable")]
        public IActionResult GetTable()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("transfertabledata", GetTableData()));

            return Ok(new { Message = "Request table Completed" });
        }

        public static List<Chart> GetData()
        {
            var r = new Random();
            return new List<Chart>()
        {
           new Chart { Data = new List<int> { r.Next(30, 40) }, Label = "Operaciones" },
           new Chart { Data = new List<int> { r.Next(15, 40) }, Label = "Instrucciones" },
           new Chart { Data = new List<int> { r.Next(5, 20) }, Label = "Comprobantes" },
           new Chart { Data = new List<int> { r.Next(1, 10) }, Label = "Otros" }
        };
        }

        public static List<TableData> GetTableData()
        {
            var r = new Random();
            return new List<TableData>()
        {
           new TableData { Opcion1 = r.Next(135, 5688), Opcion2 = r.Next(159, 55896), Opcion3 = r.Next(15, 220) },
           new TableData { Opcion1 = r.Next(135, 5688), Opcion2 = r.Next(159, 55896), Opcion3 = r.Next(15, 220)},
           new TableData {Opcion1 = r.Next(135, 5688), Opcion2 = r.Next(159, 55896), Opcion3 = r.Next(15, 220) }
        };
        }
    }
}