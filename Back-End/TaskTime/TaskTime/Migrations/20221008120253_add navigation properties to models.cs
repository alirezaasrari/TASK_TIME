using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskTime.Migrations
{
    public partial class addnavigationpropertiestomodels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "PersonWorkAndRests",
                newName: "EmployeeId");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "LastPages",
                newName: "EmployeeId");

            migrationBuilder.CreateTable(
                name: "States",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EmployeeState = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmployeeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_States", x => x.Id);
                    table.ForeignKey(
                        name: "FK_States_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SecondPages_EmployeeId",
                table: "SecondPages",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_PersonWorkAndRests_EmployeeId",
                table: "PersonWorkAndRests",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_LastPages_EmployeeId",
                table: "LastPages",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_States_EmployeeId",
                table: "States",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_LastPages_Employees_EmployeeId",
                table: "LastPages",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PersonWorkAndRests_Employees_EmployeeId",
                table: "PersonWorkAndRests",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SecondPages_Employees_EmployeeId",
                table: "SecondPages",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LastPages_Employees_EmployeeId",
                table: "LastPages");

            migrationBuilder.DropForeignKey(
                name: "FK_PersonWorkAndRests_Employees_EmployeeId",
                table: "PersonWorkAndRests");

            migrationBuilder.DropForeignKey(
                name: "FK_SecondPages_Employees_EmployeeId",
                table: "SecondPages");

            migrationBuilder.DropTable(
                name: "States");

            migrationBuilder.DropIndex(
                name: "IX_SecondPages_EmployeeId",
                table: "SecondPages");

            migrationBuilder.DropIndex(
                name: "IX_PersonWorkAndRests_EmployeeId",
                table: "PersonWorkAndRests");

            migrationBuilder.DropIndex(
                name: "IX_LastPages_EmployeeId",
                table: "LastPages");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "PersonWorkAndRests",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "LastPages",
                newName: "UserId");
        }
    }
}
