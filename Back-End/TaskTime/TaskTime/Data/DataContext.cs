using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using TaskTime.Models;

namespace TaskTime.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<SecondPage> SecondPages { get; set; }
        public DbSet<PersonWorkAndRest> PersonWorkAndRests { get; set; }
        public DbSet<LastPage> LastPages { get; set; }
        public DbSet<State> States { get; set; }
    }
}
