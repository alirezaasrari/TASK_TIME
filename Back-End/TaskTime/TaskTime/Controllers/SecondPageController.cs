using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskTime.Data.Services;
using TaskTime.ViewModels;

namespace TaskTime.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecondPageController : ControllerBase
    {
        public SecondPageService _secondPageService;
        public SecondPageController(SecondPageService secondPageService)
        {
            _secondPageService = secondPageService;
        }

        [HttpGet("get-all-second-page-data")]
        public IActionResult GetAllEmployeeSecondPageData() 
        {
          var allemployeesecondpagedata = _secondPageService.GetAllEmployeeSecondPageData();
            return Ok(allemployeesecondpagedata);
        }

        [HttpGet("get-employee-data-by-id/{id}")]
        public IActionResult GetEmployeeSecondPageDataById(int id)
        {
            var employeesecondpagedata = _secondPageService.GetEmployeeSecondPageDataById(id);
            return Ok(employeesecondpagedata);
        }

        [HttpPost("post-employee-secondpagedata")]
        public IActionResult PostEmployeeSecondPageData([FromBody] SecondPageVM secondpage) 
        {
            try
            {
                _secondPageService.PostSecondPageData(secondpage);
                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPut("update-employeesecondpagedata-by-id/{id}")]
        public IActionResult UpdateEmployeeSecondPageData(int id, [FromBody] SecondPageVM secondPage)
        {
            var updatedsecondpageemployee = _secondPageService.UpdateEmployeeSecondPageData(id,secondPage);
            return Ok(updatedsecondpageemployee);
        }

        [HttpDelete("delete-employee-second-page-data")]
        public IActionResult DeleteEmployeeSecondPageData(int id)
        {
            _secondPageService.DeleteEmployeeSecondPageData(id);
            return Ok();
        }
    }
}
