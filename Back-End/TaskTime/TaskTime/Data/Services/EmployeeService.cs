using Microsoft.AspNetCore.Mvc;
using TaskTime.Data;
using TaskTime.Models;
using TaskTime.ViewModels;

namespace TaskTime.services
{
    public class EmployeeService
    {
        private DataContext _context;
        public EmployeeService(DataContext context)
        {
            _context = context;
        }
        public void AddEmployee( EmployeeVM employee) 
        {
            Employee _employee = new Employee()
            {
                Name = employee.Name,
            };
            _context.Employees.Add(_employee);
            _context.SaveChanges();
        }
        public Employee UpdateEmployeeById(int employeeId, EmployeeVM employee)
        {
            var _employee = _context.Employees.FirstOrDefault(n => n.Id == employeeId);
            if(_employee != null)
            {
                _employee.Name = employee.Name;

                _context.SaveChanges();
            }
            return _employee;
        }

        public List<Employee> GetAllEmployees() =>  _context.Employees.ToList();
        public Employee GetEmployeeById(int Id)
        {
            var employee = _context.Employees.FirstOrDefault(n => n.Id == Id);
            return employee;
        }

        public void DeleteEmployeeById(int employeeId)
        {
            var _employee = _context.Employees.FirstOrDefault(n => n.Id == employeeId);
            if(_employee != null)
            {
                _context.Remove(_employee);
                _context.SaveChanges();
            }
        }

    }
}
