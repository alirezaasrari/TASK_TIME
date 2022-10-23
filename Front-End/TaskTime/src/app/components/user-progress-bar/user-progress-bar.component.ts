import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IUnitInfo } from 'src/app/interfaces/elements';
import { ShowTimeService } from 'src/app/services/show-time.service';
import { TaskStatusService } from 'src/app/services/task-status.service';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-user-progress-bar',
  templateUrl: './user-progress-bar.component.html',
  styleUrls: ['./user-progress-bar.component.css'],
})
export class UserProgressBarComponent implements OnInit, AfterViewInit {
  
  @ViewChild('section', { read: ViewContainerRef })
  sectioncontainer!: ViewContainerRef;
  unitInfo!: IUnitInfo;
  timer: any = 0;
  constructor(
    private cdRef: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver,
    private taskStatus: TaskStatusService,
    public showTime: ShowTimeService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.createComponent();
      this.taskStatus.setUnitIndex();
    }, 500);
    this.cdRef.detectChanges();
  }

  createComponent() {
    const factory = this.resolver.resolveComponentFactory(SectionComponent);
    const componentRef = this.sectioncontainer.createComponent(factory);
  }

}
