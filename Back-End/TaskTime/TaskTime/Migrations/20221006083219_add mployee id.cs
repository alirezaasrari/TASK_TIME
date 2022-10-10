using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskTime.Migrations
{
    public partial class addmployeeid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "SecondPages");

            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "SecondPages",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "SecondPages");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "SecondPages",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
