using TaskTime.Models;

namespace TaskTime.ViewModels
{
    public class SecondPageVM
    {
        public string Emotion { get; set; }
        public string Description { get; set; }
        public DateTime date { get; set; } = DateTime.Now;

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
