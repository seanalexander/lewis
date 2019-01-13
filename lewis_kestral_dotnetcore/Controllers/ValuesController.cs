using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace lewis_kestral_dotnetcore.Controllers
{
    [Route("/")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "hello", "world" };
        }
        [HttpPost]
        [Route("api/sessions")]
        public ActionResult<IEnumerable<string>> Post()
        {
            return new string[] { "hello", "world" };
        }
    }
}
