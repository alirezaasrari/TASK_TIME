namespace TaskTime.Models.ViewModels
{
    public class LastPageVM
    {
        public int Stars { get; set; }
        public string Description { get; set; }

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
