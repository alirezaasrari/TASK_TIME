import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskTimeService } from 'src/app/services/taskTime';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-leaving-work',
  templateUrl: './dialog-leaving-work.component.html',
  styleUrls: ['./dialog-leaving-work.component.css']
})
export class DialogLeavingWorkComponent implements OnInit {
  router: any;
    constructor(private fb: FormBuilder, private service: TaskTimeService,
      @Inject(MAT_DIALOG_DATA) public data: any){}
  public form: FormGroup;
  rating: number = 0;
  description: string = "";
  employeeId: number;
  id:number;
  onLeaving(employeeId:number, description: string, rating: number) {
    this.service.postlastpage({
      stars: rating,
      description: description,
      employeeId: this.employeeId
    }).subscribe();
  }
  ngOnInit(): void {
    this.employeeId = this.data.id;
  }
}
