using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskTime.Models;
using TaskTime.services;
using TaskTime.ViewModels;

namespace TaskTime.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public EmployeeService _employeeService;
        public EmployeeController(EmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpPost("add-employee")]
        public IActionResult AddEmployee([FromBody] EmployeeVM employee)
        {
            _employeeService.AddEmployee(employee);
            return Ok();
        }

        [HttpGet("get-all-employee")]
        public IActionResult GetAllEmployees() 
        {
            var allEmployees = _employeeService.GetAllEmployees();
            return Ok(allEmployees);
        }

        [HttpGet("get-employee-by-id/{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            var employee = _employeeService.GetEmployeeById(id);
            return Ok(employee);
        }

        [HttpPut("update-employee/{id}")]
        public IActionResult UpdateEmployeeById(int id, [FromBody] EmployeeVM employee) 
        {
            var updatedemployee = _employeeService.UpdateEmployeeById(id,employee);
            return Ok(updatedemployee);
        }

        [HttpDelete("delete-employee")]
        public IActionResult RemoveEmployee(int id)
        {
            _employeeService.DeleteEmployeeById(id);
            return Ok();
        }
    }
}
