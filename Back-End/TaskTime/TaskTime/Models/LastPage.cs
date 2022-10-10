namespace TaskTime.Models
{
    public class LastPage
    {
        public int Id { get; set; }
        public int Stars { get; set; }
        public string Description { get; set; }
        public DateTime date { get; set; } = DateTime.Now;

        //navigation properties
        public int EmployeeId { get; set; }
        public Employee? Employee { get; set; }
    }
}
