import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  EunitSectionColor,
  IEmployeeDetail,
  ISecondPageEmployeeDetail,
  IUnitInfo,
} from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';
import { SectionComponent } from '../user-progress-bar/section/section.component';
import { UserProgressBarComponent } from '../user-progress-bar/user-progress-bar.component';

@Component({
  selector: 'app-admin-restandwork-panel',
  templateUrl: './admin-restandwork-panel.component.html',
  styleUrls: ['./admin-restandwork-panel.component.css'],
  providers: [SectionComponent],
})
export class AdminRestandworkPanelComponent implements OnInit {
  constructor(private service: TaskTimeService,private userProgressBarComponent: UserProgressBarComponent) {}
  employeeList$: Observable<IEmployeeDetail[]>;
  secondPageEmployeeList: ISecondPageEmployeeDetail[] = [];
  check:boolean = false;
 
  ngOnInit(): void {
    const unitInfo = {
      color: EunitSectionColor.GRAY,
    } as IUnitInfo;
    this.service.getAllSecondPages().subscribe((x) => {
      if (x.length > 0)
        x.forEach((element) => {
          of(element).subscribe((p) => {
            setTimeout(() => {
              this.service
                .getEmployeeById(p.employeeId)
                .subscribe((y: IEmployeeDetail) => {
                  if (y != null)
                    this.secondPageEmployeeList.push({
                      datetime: element.dateTime,
                      description: element.description,
                      emotion: element.emotion,
                      employeeid: y.id,
                      id: y.id,
                      name: y.name,
                    });
                });
            }, 100);
          });
        });
    });
  }
}
