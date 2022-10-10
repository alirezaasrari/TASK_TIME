using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Globalization;
using System.Text;
using System.Collections.Generic;

namespace TaskTime.Data
{
    public static class DateConvertor
    {
        public static string ToShamsi(this DateTime value)
        {
            PersianCalendar pc = new PersianCalendar();
            return pc.GetYear(value) + "/" + pc.GetMonth(value).ToString("00") + "/" +
                   pc.GetDayOfMonth(value).ToString("00") + " " +
                   pc.GetHour(value).ToString("00") + ":" + pc.GetMinute(value).ToString("00");
        }
    }
}


// DateOnly dateOnly = DateOnly.FromDateTime(DateTime.Now);
// TimeOnly timeOnly = TimeOnly.FromDateTime(DateTime.Now);

// Console.WriteLine(dateOnly.DayOfWeek);
// Console.WriteLine(timeOnly);
