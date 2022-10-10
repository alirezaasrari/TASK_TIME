using TaskTime.Data;
using TaskTime.Models;
using TaskTime.ViewModels;

namespace TaskTime.services
{
    public class PersonWorkAndRestService
    {
        private readonly DataContext _context;
        public PersonWorkAndRestService(DataContext context)
        {
            _context = context;
        }
        public void Start(PersonWorkAndRestVM personWorkAndRest) 
        {
           _context.SaveChanges();
        }
        public void AddWork(PersonWorkAndRestVM personWorkAndRest)
        {

        }
        public void AddRest(PersonWorkAndRestVM personWorkAndRest)
        {

        }
        public void End(PersonWorkAndRestVM personWorkAndRest)
        {

        }
    }
}
