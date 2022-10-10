using TaskTime.Models;

namespace TaskTime.ViewModels
{
    public class PersonWorkAndRestVM
    {
        public int State { get; set; }

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
