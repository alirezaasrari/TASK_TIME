using TaskTime.Models;

namespace TaskTime.Data
{
    public class AppDbInitialer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                if (!context.States.Any())
                {
                    context.States.AddRange(new State()
                    {
                        Date = DateTime.Now,
                        EmployeeId = 1,
                        EmployeeState = "work",
                        Id = 1
                    });
                }

            }
        }
    }
}
