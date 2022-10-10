namespace TaskTime.Models
{
    public class State
    {
        public int Id { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public string EmployeeState { get; set; }

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
        
    }
}
