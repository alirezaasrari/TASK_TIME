import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IUnitInfo } from 'src/app/interfaces/elements';
import { ShowTimeService } from 'src/app/services/show-time.service';
import { TaskStatusService } from 'src/app/services/task-status.service';
import { UnitComponent } from './unit/unit.component';

@Component({
  selector: '[app-section]',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent
  implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit
{
  unitInfo!: IUnitInfo;
  interval: any;
  d = new Date();
  H = this.d.getHours() * 60;
  M = this.d.getMinutes();
  time = this.H + this.M;

  min = this.taskStatus.unitIndex;
  h = this.min / 60;
  m = this.min % 60;
  constructor(
    private cdRef: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver,
    private taskStatus: TaskStatusService,
    public showTime: ShowTimeService
  ) {}

  @ViewChild('unitsection', { read: ViewContainerRef })
  unitsectioncontainer!: ViewContainerRef;

  get localStorage() {
    return localStorage;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.taskStatus.sectionIndex == 0) {
      for (let i = 0; i < this.time; i++) {
        this.createComponent();
        this.taskStatus.setUnitIndex();
      }
    }

    clearInterval(this.taskStatus.timer);
    this.taskStatus.timer = setInterval(() => {
      this.createComponent();
      this.taskStatus.setUnitIndex();
      this.getTotalWork();
      this.getTotalRest();
      localStorage.setItem('localkey', 'localkeyvalue');

      if (this.taskStatus.unitIndex >= 1440) {
        clearInterval(this.taskStatus.timer);
      }
    }, 1000);

    this.cdRef.detectChanges();
  }
  ngAfterViewChecked(): void {}
  ngAfterContentInit(): void {}

  createComponent() {
    const factory = this.resolver.resolveComponentFactory(UnitComponent);
    const componentRef = this.unitsectioncontainer.createComponent(factory);
  }

  getTotalWork() {
    let u = this.taskStatus.unitIndex;

    if (this.taskStatus.disabledWork === true) {
      this.showTime.green.push(u);
    }
  }
  getTotalRest() {
    let u = this.taskStatus.unitIndex;

    if (this.taskStatus.disabledRest === true) {
      this.showTime.red.push(u);
    }
  }
}
