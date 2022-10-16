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
  todaydate:any;
  employee: any;
  dayofweek: string;
  employeeId: number;
  selectedId: number = 1;
  defaultValue:string = "لطفا نام خود را انتخاب کنید";
  public now: any = new Date();
  constructor(public dialog: MatDialog, private service: TaskTimeService) {
    setInterval(() => {
      this.now = new Date().toLocaleTimeString();
    }, 1);
  }
  selectIdHandler(event: any){
   this.selectedId = event.target.value;
  }
  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
    this.service.getpersiandate().subscribe(x => {
      if(x.dayOfTheWeek == "Sunday"){
        this.dayofweek = "یکشنبه"
      }else if(x.dayOfTheWeek == "Saturday"){
        this.dayofweek = "شنبه"
      }else if(x.dayOfTheWeek == "Monday"){
        this.dayofweek = "دوشنبه"
      }else if(x.dayOfTheWeek == "Tuseday"){
        this.dayofweek = "سه شنبه"
      }else if(x.dayOfTheWeek == "wedensday"){
        this.dayofweek = "چهارشنبه"
      }else if(x.dayOfTheWeek == "tursday"){
        this.dayofweek = "پنجشنبه"
      }else if(x.dayOfTheWeek == "Friday"){
        this.dayofweek = "جمعه"
      }
    })
    this.todaydate = this.now.toLocaleDateString()
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
function elseIf() {
  throw new Error('Function not implemented.');
}

