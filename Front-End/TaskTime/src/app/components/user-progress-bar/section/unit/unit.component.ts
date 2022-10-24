import { Component, OnInit } from '@angular/core';
import { EunitSectionColor } from 'src/app/interfaces/elements';
import { ShowTimeService } from 'src/app/services/show-time.service';
import { TaskStatusService } from 'src/app/services/task-status.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  
  d = new Date();
  H = this.d.getHours() * 60;
  M = this.d.getMinutes();
  time = this.H + this.M;
  color: EunitSectionColor = EunitSectionColor.GRAY;
  width: number = 850 / 1440;
  length: number = 0;

  constructor(public taskStatus : TaskStatusService ,public showTime : ShowTimeService) { }

  ngOnInit(): void {
    //this.color=this.taskStatus.unitInfo.color;
  }

}
