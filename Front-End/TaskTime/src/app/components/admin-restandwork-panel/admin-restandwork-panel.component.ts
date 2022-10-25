import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {
  EunitSectionColor,
  IEmployeeDetail,
  IEmployeeStateDetail,
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
  secondPageEmployeeList: ISecondPageEmployeeDetail[] = [];
  check:boolean;
  fireChangeState(){
   // this.service.postemployeestate(this.id,{employeeId:this.id,employeeState:this.check}).subscribe()
  }
  ngOnInit(): void {
    const unitInfo = {
      color: EunitSectionColor.GRAY,
    } as IUnitInfo;
    this.service.getAllEmployee().subscribe((x:IEmployeeDetail[]) => {
           x.forEach((element) => {
            of(element).subscribe((p) => {
              this.service.getEmployeeStateById(p.id).subscribe((f:IEmployeeStateDetail) => {
                this.secondPageEmployeeList.push({
                  datetime:f.date,
                  name:element.name,
                  check : f.employeeState == "work"? this.check = true : this.check = false
                });
              })
            })
           })
    })
  }
}
