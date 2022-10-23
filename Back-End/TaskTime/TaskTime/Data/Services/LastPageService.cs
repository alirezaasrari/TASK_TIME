using TaskTime.Models;
using TaskTime.Models.ViewModels;

namespace TaskTime.Data.Services
{
    public class LastPageService
    {
        private DataContext _context;
        public LastPageService(DataContext datacontext)
        {
            _context = datacontext;
        }
        public void PostLastPageData(LastPageVM lastpagedata)
        {
            LastPage _lastpagedata = new LastPage()
            {                
                Stars = lastpagedata.Stars,
                Description = lastpagedata.Description,
                EmployeeId = lastpagedata.EmployeeId,
            };
            _context.LastPages.Add(_lastpagedata);
            _context.SaveChanges();
        }

        public List<LastPage> GetAllLastPages() => _context.LastPages.ToList();
        public LastPage GetLastPageById(int LastPageId)
        {
            var _lastpage = _context.LastPages.FirstOrDefault(x => x.EmployeeId == LastPageId);
            return _lastpage;
        }

        public void DeleteEmployeeLastPageData(int id)
        {
            var lastpage = _context.LastPages.FirstOrDefault(n => n.Id == id);
            if (lastpage != null)
            {
                _context.LastPages.Remove(lastpage);
                _context.SaveChanges();
            }
        }
    }
}
