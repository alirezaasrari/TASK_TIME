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
  index!: IUnitInfo;
  color!: string;
  dateTime!: Date;
  unitInfo!: IUnitInfo;
  interval: any;

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
  ngOnInit(): void {
    this.dateTime = new Date();
  }
  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {}
  ngAfterContentInit(): void {
    clearInterval(this.taskStatus.timer);
    this.taskStatus.timer = setInterval(() => {
      this.createComponent();
      this.taskStatus.setUnitIndex();
      localStorage.setItem('localkey', 'localkeyvalue');
      if (this.taskStatus.unitIndex >= 1440) {
        clearInterval(this.taskStatus.timer);
      }
    }, 1000);
    this.cdRef.detectChanges();
  }
  createComponent() {
    const factory = this.resolver.resolveComponentFactory(UnitComponent);
    const componentRef = this.unitsectioncontainer.createComponent(factory);
  }
}
