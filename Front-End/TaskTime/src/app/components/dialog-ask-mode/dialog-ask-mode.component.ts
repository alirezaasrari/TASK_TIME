import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IsecondPageObject } from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-ask-mode',
  templateUrl: './dialog-ask-mode.component.html',
  styleUrls: ['./dialog-ask-mode.component.css'],
})

export class DialogAskModeComponent implements OnInit {
  constructor(
    private snackbar: MatSnackBar,
    private service: TaskTimeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  emotionList: any[] = ['خیلی بد', 'بد', 'متوسط', 'خوب', 'عالی'];
  emotion: string = '';
  employeeId: number;
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
    this.service.postsecondpage({
      employeeId: this.employeeId,
      emotion: emotion,
      description: description
    }).subscribe()
  }



  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 4000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'left',
    });
  }

  ngOnInit(): void {
    this.employeeId = this.data.id;
  }
}

 //   catchError(error => {
    //     if (error.error instanceof ErrorEvent) {
    //         this.errorMsg = `Error: ${error.error.message}`;
    //     } else {
    //         this.errorMsg = `Error: ${error.message}`;
    //     }
    //     return of([]);
    // })
    //     p =>
    //     {
    //       if(this.errorMsg != null){
    //         this.openSnackBar('گزارش روزانه با شکست مواجه گردید');
    //       }else{
    //         this.openSnackBar('گزارش روزانه با موفقیت ثبت گردید');
    //       }
    //     }
    //  );
    //  this.openSnackBar('گزارش روزانه با موفقیت ثبت گردید');