using ExpressTimezone;
using TaskTime.services;

namespace TaskTime.Models
{
    public class PersonWorkAndRest
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; } = DateTime.Now;
        public int State { get; set; }

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
