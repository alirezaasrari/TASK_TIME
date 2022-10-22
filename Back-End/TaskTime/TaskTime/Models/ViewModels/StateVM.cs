namespace TaskTime.Models.ViewModels
{
    public class StateVM
    {
        public string EmployeeState { get; set; }
        public DateTime date { get; set; } = DateTime.Now;

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
