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
  defaultValue:string = "لطفا نام خود را انتخاب کنید";
  now: any;
  nowone : any;
  constructor(public dialog: MatDialog, private service: TaskTimeService) {
    // setInterval(() => {
    //   this.now = new Date().toLocaleTimeString().split(" ")[0];
    //   this.nowone = new Date().toLocaleTimeString().split(" ")[1];
    // }, 1000);
  }
  selectIdHandler(event: any){
   this.selectedId = event.target.value;
  }
  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
    setInterval(()=>{
      this.service.getpersiandate2().subscribe((x:any) => {
        this.dayofweek = x.date.weekday.name,
        this.now = x.time12.full.short.fa,
        this.todaydate = x.date.full.unofficial.usual.fa
      });
    },1000) 
    // this.service.getpersiandate().subscribe(x => {
    //   if(x.dayOfTheWeek == "Sunday"){
    //     this.dayofweek = "یکشنبه"
    //   }else if(x.dayOfTheWeek == "Saturday"){
    //     this.dayofweek = "شنبه"
    //   }else if(x.dayOfTheWeek == "Monday"){
    //     this.dayofweek = "دوشنبه"
    //   }else if(x.dayOfTheWeek == "Tuseday"){
    //     this.dayofweek = "سه شنبه"
    //   }else if(x.dayOfTheWeek == "wedensday"){
    //     this.dayofweek = "چهارشنبه"
    //   }else if(x.dayOfTheWeek == "tursday"){
    //     this.dayofweek = "پنجشنبه"
    //   }else if(x.dayOfTheWeek == "Friday"){
    //     this.dayofweek = "جمعه"
    //   }
    // })
    // this.todaydate = this.now.toLocaleDateString()
    
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
