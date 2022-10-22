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
  date$:Observable<any>;
  allEmployee: any[] = [];
  length: number;
  todaydate:any;
  employee: any;
  dayofweek: any;
  employeeId: number;
  selectedId: number = 1;
  hour: any;
  min:any;
  day:string;
  month:string;
  year:string;
  constructor(public dialog: MatDialog, private service: TaskTimeService){}
  selectIdHandler(event: any){
   this.selectedId = event.target.value;
  }
  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
    setInterval(()=>{
      this.service.getpersiandate().subscribe((x:any) => {
        this.dayofweek = x.date.weekday.name,
        this.hour = x.time24.hour.fa,
        this.min = x.time24.minute.fa,
        this.todaydate = x.date.full.unofficial.usual.fa,
        this.day = x.date.year.number.fa ,
        this.month = x.date.month.name,
        this.year = x.date.day.number.fa
      });
    },1000) 
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
