using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskTime.services;

namespace TaskTime.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonWorkAndRestController : ControllerBase
    {
        public PersonWorkAndRestService _PersonWorkAndRestService;
        public PersonWorkAndRestController(PersonWorkAndRestService personWorkAndRestService)
        {
            _PersonWorkAndRestService = personWorkAndRestService;
        }
    }
}
