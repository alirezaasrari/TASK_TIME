import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import * as moment from 'jalali-moment';
import { interval, takeUntil, timer } from 'rxjs';
import { DialogLeavingWorkComponent } from './dialog-leaving-work/dialog-leaving-work.component';

@Component({
  selector: 'app-current-work-day',
  templateUrl: './current-work-day.component.html',
  styleUrls: ['./current-work-day.component.css']
})
export class CurrentWorkDayComponent implements OnInit {

  progressbarValue = 0;
  curSec: number = 0;
  rest: boolean = false;
  d = new Date(); 
  H =this.d.getHours(); 
  M =this.d.getMinutes(); 
  time = this.H + ":" + this.M;


  startTimer(seconds: number) {
    // const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onOpenDialog() {
    this.dialog.open(DialogLeavingWorkComponent,
      { panelClass: 'custom-container' });
  }


  // public getCurrentTime(){

  //   let d = new Date(); 
  //   let H =d.getHours(); 
  //   let M =d.getMinutes(); 
  //   let time = H + ":" + M;

  //   console.log(time);
  // }

 
  // nearest midnight in the past:
  // let d = new Date();
  // d.setHours(0,0,0,0);



//   public updateColor() {
// if (this.rest === true){
//   return 'warn';
// }else{
//   return 'primary';
// }
//   }
}