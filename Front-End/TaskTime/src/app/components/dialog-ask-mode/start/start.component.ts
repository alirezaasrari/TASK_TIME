import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TaskTimeService } from 'src/app/services/taskTime';
import { DialogAskModeComponent } from '../dialog-ask-mode.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  employeeList$: Observable<any[]>;
  allEmployee: any[] = [];
  length: number;
  employee: any;
  employeeId: number;
  selectedId: number = 1;
  defaultValue:string = "لطفا نام خود را انتخاب کنید";
  constructor(public dialog: MatDialog, private service: TaskTimeService) {}
  selectIdHandler(event: any){
   this.selectedId = event.target.value;
  }
  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
  }

  public onOpenDialog() {
    this.dialog.open(DialogAskModeComponent, {
      panelClass: 'custom-container',
      data : {
        id:this.selectedId
      }
    });
  }
}
