import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskTimeService } from 'src/app/services/taskTime';

@Component({
  selector: 'app-admin-restandwork-panel',
  templateUrl: './admin-restandwork-panel.component.html',
  styleUrls: ['./admin-restandwork-panel.component.css'],
})
export class AdminRestandworkPanelComponent implements OnInit {
  constructor(private service: TaskTimeService) {}
  employeeList$: Observable<any[]>;
  secondPageEmployeeList$: Observable<any[]>;

  // name(id: number): any {
  //   // this.service.getEmployeeById(id).subscribe((x: any) => {
  //   //   return x.name;
  //   // });
  // }

  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee();
    this.secondPageEmployeeList$ = this.service.getAllSecondPages();
  }
}
