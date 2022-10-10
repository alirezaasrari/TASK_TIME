using Microsoft.AspNetCore.Mvc;
using TaskTime.Models;
using TaskTime.ViewModels;

namespace TaskTime.Data.Services
{
    public class SecondPageService
    {
        private DataContext _context;
        public SecondPageService(DataContext context)
        {
            _context = context;
        }

        public List<SecondPage> GetAllEmployeeSecondPageData() => _context.SecondPages.ToList();

        public SecondPage GetEmployeeSecondPageDataById(int employeeId) 
        {
            var _employeesecondpagedata = _context.SecondPages.FirstOrDefault(n => n.Id == employeeId);
               
            return _employeesecondpagedata;
        }

        public void PostSecondPageData(SecondPageVM secondPage)
        {
            var _secondpage = new SecondPage()
            {
                EmployeeId = secondPage.EmployeeId,
                Emotion = secondPage.Emotion,
                Description = secondPage.Description,
            };
            _context.SecondPages.Add(_secondpage);
            _context.SaveChanges();
        }

        public SecondPage UpdateEmployeeSecondPageData(int id, SecondPageVM secondPage) 
        {
         var employeesecondpagedata = _context.SecondPages.FirstOrDefault(n => n.Id == id);
            if(employeesecondpagedata != null)
            {
                employeesecondpagedata.EmployeeId = secondPage.EmployeeId;
                employeesecondpagedata.Emotion = secondPage.Emotion;
                employeesecondpagedata.Description = secondPage.Description;

                _context.SaveChanges();
            }
            return employeesecondpagedata;
        }

        public void DeleteEmployeeSecondPageData(int id) 
        {
          var secondpage = _context.SecondPages.FirstOrDefault(n => n.Id == id);
            if(secondpage != null)
            {
                _context.SecondPages.Remove(secondpage);
                _context.SaveChanges();
            }
        }
    }
}
