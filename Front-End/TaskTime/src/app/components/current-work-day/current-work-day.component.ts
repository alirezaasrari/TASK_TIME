import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EunitSectionColor, IUnitInfo } from 'src/app/interfaces/elements';
import { ShowTimeService } from 'src/app/services/show-time.service';
import { TaskStatusService } from 'src/app/services/task-status.service';
import { TaskTimeService } from 'src/app/services/taskTime';
import { SectionComponent } from '../user-progress-bar/section/section.component';
import { UserProgressBarComponent } from '../user-progress-bar/user-progress-bar.component';
import { DialogLeavingWorkComponent } from './dialog-leaving-work/dialog-leaving-work.component';

@Component({
  selector: 'app-current-work-day',
  templateUrl: './current-work-day.component.html',
  styleUrls: ['./current-work-day.component.css'],
  providers: [SectionComponent],
})
export class CurrentWorkDayComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private service: TaskTimeService,
    private route: ActivatedRoute,
    public showTime: ShowTimeService,
    public taskStatus: TaskStatusService,
    private userProgressBarComponent: UserProgressBarComponent,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  startWork: EventEmitter<IUnitInfo> = new EventEmitter<IUnitInfo>();
  selectedId: number;
  id: number;
  rest: boolean = false;
  d = new Date();
  H = this.d.getHours();
  M = this.d.getMinutes();
  time = this.H + ':' + this.M;
  employeeName$: Observable<string>[] = [];
  state: string;
  stateTime: string;
  workState: string = 'work';
  restState: string = 'rest';
  finishState: string = 'finish';
  disabledWork: boolean = false;
  disabledRest: boolean = false;

  onStartWork() {
    this.state = this.workState;
    this.service
      .postemployeestate({ 
        employeeId: this.selectedId,
        employeeState: this.workState,
      })
      .subscribe();
    // this.service
    //   .getEmployeeStateById(this.selectedId)
    //   .subscribe((x) => (this.stateTime = x.date.split('T')[1].substr(0, 5)));
    this.disabledWork = true;
    this.disabledRest = false;
    this.showTime.workTimes.push(
      Math.floor(this.taskStatus.unitIndex / 60) +
        ':' +
        (this.taskStatus.unitIndex % 60) +
        '-w'
    );
    this.taskStatus.setSectionIndex();
    const unitInfo = {
      color: EunitSectionColor.GREEN,
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;
    document.getElementById('task1')?.click();
  } 

  onStartRest() {
    this.state = this.restState;
    this.service
      .postemployeestate({
        employeeId: this.selectedId,
        employeeState: this.restState,
      })
      .subscribe();
    this.service
      .getEmployeeStateById(this.selectedId)
      .subscribe((x) => (this.stateTime = x.date.split('T')[1].substr(0, 5)));
    this.disabledRest = true;
    this.disabledWork = false;
    this.showTime.workTimes.push(
      Math.floor(this.taskStatus.unitIndex / 60) +
        ':' +
        (this.taskStatus.unitIndex % 60) +
        '-r'
    );
    this.taskStatus.setSectionIndex();
    const unitInfo = {
      color: EunitSectionColor.RED,
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;
    document.getElementById('task2')?.click();
  }

  ngOnInit(): void {
    const unitInfo = {
      color: EunitSectionColor.GRAY,
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEmployeeStateById(this.selectedId).subscribe((x) => {
      this.state = x.employeeState = 'finish' ? 'rest' : 'work';
      this.stateTime = x.date.split('T')[1].substr(0, 5);
    });
    this.service.getEmployeeById(this.selectedId).subscribe((x) => {
      this.employeeName$.push(of(x.name));
    });
  }

  public onOpenDialog() {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.service
      .postemployeestate({
        employeeId: this.selectedId,
        employeeState: this.finishState,
      })
      .subscribe();
    this.dialog.open(DialogLeavingWorkComponent, {
      panelClass: 'custom-container',
      data: {
        id: this.selectedId,
      },
    });
  }
}

