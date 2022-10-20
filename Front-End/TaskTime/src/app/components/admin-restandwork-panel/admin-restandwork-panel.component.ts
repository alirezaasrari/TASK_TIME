import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  IEmployeeDetail,
  ISecondPageEmployeeDetail,
} from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';

@Component({
  selector: 'app-admin-restandwork-panel',
  templateUrl: './admin-restandwork-panel.component.html',
  styleUrls: ['./admin-restandwork-panel.component.css'],
})
export class AdminRestandworkPanelComponent implements OnInit {
  constructor(private service: TaskTimeService) {}
  employeeList$: Observable<IEmployeeDetail[]>;
  secondPageEmployeeList: ISecondPageEmployeeDetail[] = [];
  check:boolean = false;

  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
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
            }, 500);
          });
        });
    });
  }
}
