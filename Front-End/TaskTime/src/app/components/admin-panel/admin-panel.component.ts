import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
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

  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      panelClass: ['green-snackbar'],
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

  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
    this.secondPageEmployeeList$ = this.service.getAllSecondPages()
    this.lastPageEmployeeList$ = this.service.getAllLastPages();
  }

}
