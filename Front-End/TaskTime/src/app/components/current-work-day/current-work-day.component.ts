import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, of, takeUntil, timer } from 'rxjs';
import { TaskTimeService } from 'src/app/services/taskTime';
import { DialogLeavingWorkComponent } from './dialog-leaving-work/dialog-leaving-work.component';

@Component({
  selector: 'app-current-work-day',
  templateUrl: './current-work-day.component.html',
  styleUrls: ['./current-work-day.component.css']
})
export class CurrentWorkDayComponent implements OnInit {

  progressbarValue = 0;
  selectedId:number;
  id:number;
  curSec: number = 0;
  rest: boolean = false;
  d = new Date(); 
  H =this.d.getHours(); 
  M =this.d.getMinutes(); 
  time = this.H + ":" + this.M;
  employeeName$:Observable<string>[] = [];


  startTimer(seconds: number) {
    const timer$ = interval(1000);
    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }
  
  constructor(public dialog: MatDialog,  private service: TaskTimeService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEmployeeById(this.selectedId).subscribe(x =>{
       this.employeeName$.push(of(x.name)) 
      })
  }

  public onOpenDialog() {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.dialog.open(DialogLeavingWorkComponent, {
      panelClass: 'custom-container',
      data : {
        id:this.selectedId
      }
    });
  }
}