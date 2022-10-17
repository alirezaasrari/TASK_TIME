import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IEmployee, IEmployeeُSecondPage, ILastPage } from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(
    private service: TaskTimeService,
    private snackbar: MatSnackBar
  ) { }
  employeeList$: Observable<any[]>;
  secondPageEmployeeList$: Observable<any[]>;
  lastPageEmployeeList$: Observable<any[]>;
  searchCase:number = 0;
  searchCase2:number = 0;
  searchCase3:number = 0;
  searchCase4:number = 0;
  name: string = '';

  addEmployee(name:string){
    this.service.postEmployee({name:name}).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    });
    this.openSnackBar('کارمند اضافه گردید');
  }

  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      panelClass: ['hot-green-snackbar'],
      horizontalPosition: 'right',
    });
  }

  fireDeleteEmployee(id: number): void {
    this.service.deleteEmployee(id).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    });
    this.openSnackBar('کارمند حذف گردید');
  }

  fireDeleteEmployeeSecondPage(id:number):void{
    this.service.deleteEmployeeSecondPage(id).subscribe((res: any) => {
      this.ngOnInit();
    });
    this.openSnackBar('اطلاعات صفحه دوم کارمند حذف گردید');
  }

  fireDeleteEmployeeLastPage(id:number):void{
    this.service.deleteEmployeeLastPage(id).subscribe((res: any) => {
      this.ngOnInit();
    });
    this.openSnackBar('اطلاعات صفحه اخر کارمند حذف گردید');
  }

  Employee: IEmployee = {
   name:''
  };
  EmployeeSecondPage: IEmployeeُSecondPage = {
    dateTime : '',
    description: '',
    emotion: ''
  }
  search(id: number) {
    var employee = this.service.getEmployeeById(id).subscribe((res: any) =>
      {
       this.Employee.name = res.name
       });
    return employee;
  }

  search2(id: number) {
    var secondpage = this.service.getSecondPageById(id).subscribe((res: any) =>
      {
       this.EmployeeSecondPage.dateTime = res.dateTime,
       this.EmployeeSecondPage.description = res.description,
       this.EmployeeSecondPage.emotion = res.emotion
       });
    return secondpage;
  }

  search3(id: number) {
    var employee = this.service.getEmployeeById(id).subscribe((res: any) =>
      {
       this.Employee.name = res.name
       });
    return employee;
  }

  LastPage: ILastPage = {
    stars: 0,
    date: '',
    description: ''
  }
  search4(id: number) {
    var lastpage = this.service.getLastPageById(id).subscribe((res: any) =>
      {
       this.LastPage.date = res.date,
       this.LastPage.stars = res.stars,
       this.LastPage.description = res.description
       });
    return lastpage;
  }
  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
    this.secondPageEmployeeList$ = this.service.getAllSecondPages()
    this.lastPageEmployeeList$ = this.service.getAllLastPages();
  }

}
