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
                EmployeeId = lastpagedata.EmployeeId,
                Description = lastpagedata.Description,
                Stars = lastpagedata.Stars,
            };
            _context.LastPages.Add(_lastpagedata);
            _context.SaveChanges();
        }

        public List<LastPage> GetAllLastPages() => _context.LastPages.ToList();
        public LastPage GetLastPageById(int LastPageId)
        {
            var _lastpage = _context.LastPages.FirstOrDefault(x => x.Id == LastPageId);
            return _lastpage;
        }
    }
}
