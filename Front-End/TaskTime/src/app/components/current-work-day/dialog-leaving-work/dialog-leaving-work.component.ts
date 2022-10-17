import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskTimeService } from 'src/app/services/taskTime';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-leaving-work',
  templateUrl: './dialog-leaving-work.component.html',
  styleUrls: ['./dialog-leaving-work.component.css']
})
export class DialogLeavingWorkComponent implements OnInit {
    constructor(private fb: FormBuilder, private service: TaskTimeService,
      private snackbar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private router: Router){}
  public form: FormGroup;
  rating: number = 0;
  description: string = "";
  employeeId: number;
  id:number;
  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
  onLeaving(employeeId:number, description: string, rating: number) {
    this.service.postlastpage({
      stars: rating,
      description: description,
      employeeId: this.employeeId
    }).subscribe();
    this.openSnackBar('گزارش روزانه شما با موفقیت ثبت گردید');
    this.router.navigateByUrl('');
  }
  ngOnInit(): void {
    this.employeeId = this.data.id;
  }
}
