import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IsecondPageObject } from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dialog-ask-mode',
  templateUrl: './dialog-ask-mode.component.html',
  styleUrls: ['./dialog-ask-mode.component.css'],
})

export class DialogAskModeComponent implements OnInit {
  constructor(
    private snackbar: MatSnackBar,
    private service: TaskTimeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  employeeName$:Observable<string>[] = [];
  emotionList: any[] = ['خیلی بد', 'بد', 'متوسط', 'خوب', 'عالی'];
  emotion: string = '';
  employeeId: number;
  restState:string = "rest";
  description = '';
  errorMsg: string;
  secondPageObject: IsecondPageObject = {
    employeeId: 0,
    emotion: '',
    description: '',
  };  

  onEmotionSelect(id: number) {
    this.emotion = this.emotionList[id];
  }

  onSubmit(id: number, emotion: string, description: string) {
    this.service.postemployeestate({employeeState:this.restState,employeeId:this.employeeId}).subscribe();
    this.service.postsecondpage({
      employeeId: this.employeeId,
      emotion: emotion,
      description: description
    }).subscribe(),
    this.openSnackBar('شما به صفحه شمارش ساعات کار و استراحت وارد شدید');
  }

  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  } 

  openSnackBar2(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      panelClass: ['red-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  onCancel(){
    this.openSnackBar2(' میتوانید مجددا برای ورود به صفحه ثبت کار و استراحت اقدام نمایید');
  }

  ngOnInit(): void {
    this.employeeId = this.data.id;
    this.service.getEmployeeById(this.employeeId).subscribe(x =>{
      this.employeeName$.push(of(x.name.split(" ")[0])) 
     })
  }
}