using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskTime.Migrations
{
    public partial class removeextrafield : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Stars",
                table: "SecondPages",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Stars",
                table: "SecondPages");
        }
    }
}
