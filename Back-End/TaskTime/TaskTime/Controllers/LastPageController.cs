using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskTime.Data.Services;
using TaskTime.Models.ViewModels;

namespace TaskTime.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LastPageController : ControllerBase
    {
        public LastPageService _lastpageservice;
        public LastPageController(LastPageService lastpageservice)
        {
            _lastpageservice = lastpageservice;
        }
        [HttpPost("add-lastpage-data")]
        public IActionResult PostEmployeeLastPageData([FromBody]LastPageVM lastpage)
        {
            _lastpageservice.PostLastPageData(lastpage);
            return Ok();
        }
        [HttpGet("get-all-lastpages")]
        public IActionResult GetAllLastPages()
        {
            var alllastpages = _lastpageservice.GetAllLastPages();
            return Ok(alllastpages);
        }
        [HttpGet("get-last-page-by-id/{id}")]
        public IActionResult GetLastPageById(int id)
        {
            var lastpagebyid = _lastpageservice.GetLastPageById(id);
            return Ok(lastpagebyid);
        }

        [HttpDelete("delete-employee-lastpage-data")]
        public IActionResult DeleteEmployeeLastPageData(int id)
        {
            _lastpageservice.DeleteEmployeeLastPageData(id);
            return Ok();
        }
    }
}
