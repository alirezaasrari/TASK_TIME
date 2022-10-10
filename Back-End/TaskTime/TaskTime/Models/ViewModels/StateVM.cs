namespace TaskTime.Models.ViewModels
{
    public class StateVM
    {
        public string EmployeeState { get; set; }

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
