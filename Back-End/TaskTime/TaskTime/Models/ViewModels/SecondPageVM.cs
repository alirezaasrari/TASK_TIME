using TaskTime.Models;

namespace TaskTime.ViewModels
{
    public class SecondPageVM
    {
        public string Emotion { get; set; }
        public string Description { get; set; }

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
