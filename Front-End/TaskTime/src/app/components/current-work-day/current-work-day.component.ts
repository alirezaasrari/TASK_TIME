import { Component, EventEmitter, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  EunitSectionColor,
  IEmployeeDetail,
  IEmployeeStateDetail,
  ISecondPageEmployeeDetail,
  IUnitInfo,
} from 'src/app/interfaces/elements';
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
  secondPageEmployeeList: ISecondPageEmployeeDetail[] = [];
  check: boolean;
  startWork: EventEmitter<IUnitInfo> = new EventEmitter<IUnitInfo>();
  selectedId: number;
  id: number;
  rest: boolean = false;
  d = new Date();
  H = this.d.getHours();
  M = this.d.getMinutes();
  time = this.H + ':' + this.M;
  //worktime = '00' + ':' + '00';
  worktime = 0;
  //resttime = '00' + ':' + '00';
  resttime = 0;
  employeeName$: Observable<string>[] = [];
  state: string;
  stateTime: string;
  workState: string = 'work';
  restState: string = 'rest';
  finishState: string = 'finish';
  disabledWork: boolean = false;
  disabledRest: boolean = false;
  addworktime: any;
  addresttime: any;

  onStartWork() {
    this.state = this.workState;
    this.service
      .postemployeestate({
        employeeId: this.selectedId,
        employeeState: this.workState,
      })
      .subscribe();

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
    clearInterval(this.addresttime);
    this.addworktime = setInterval(() => {
      this.worktime++;
    }, 1000);
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
    clearInterval(this.addworktime);
    this.addresttime = setInterval(() => {
      this.resttime++;
    }, 1000);
  }
  ngAfterViewInit() {
    this.addworktime = setInterval(() => {
      this.worktime++;
    }, 1000);
  }

  ngOnInit(): void {
    const unitInfo = {
      color: EunitSectionColor.GRAY,
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEmployeeById(this.selectedId).subscribe((x) => {
      this.employeeName$.push(of(x.name));
    });

    // admin part
    this.service.getAllEmployee().subscribe((x: IEmployeeDetail[]) => {
      x.forEach((element) => {
        of(element).subscribe((p) => {
          this.service
            .getEmployeeStateById(p.id)
            .subscribe((f: IEmployeeStateDetail) => {
              this.secondPageEmployeeList.push({
                datetime: f.date,
                name: element.name,
                check:
                  f.employeeState == 'work'
                    ? (this.check = true)
                    : (this.check = false),
              });
            });
        });
      });
    });
  }

  public onOpenDialog() {
    clearInterval(this.addworktime);
    clearInterval(this.addresttime);
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
