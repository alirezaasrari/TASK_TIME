using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskTime.Data.Services;
using TaskTime.Models.ViewModels;

namespace TaskTime.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private StateService _stateservice;
        public StateController(StateService stateservice)
        {
            _stateservice = stateservice;   
        }
        [HttpGet("get-all-states")]
        public IActionResult GetAllStates()
        {
            var allstates = _stateservice.GetAllStates(); 
            return Ok(allstates);
        }

        [HttpGet("get-employee-state-by-id/{id}")]
        public IActionResult GetEmployeeStateById(int id)
        {
            var employeestate = _stateservice.GetEmployeeStateById(id);
            return Ok(employeestate);
        }

        [HttpPost("add-employee-state")]
        public IActionResult PostEmployeeState([FromBody] StateVM state)
        {
            _stateservice.AddState(state);
            return Ok();
        }

        [HttpPut("update-employee-state/{id}")]
        public IActionResult UpdateEmployeeState(int id, [FromBody]StateVM state)
        {
            var updatedstate = _stateservice.UpdateState(id,state);
            return Ok(updatedstate);
        }

        [HttpDelete("delete-employee-stae-data")]
        public IActionResult DeleteEmployeeStateData(int id)
        {
            _stateservice.DeleteEmployeeStateData(id);
            return Ok();
        }
    }
}
