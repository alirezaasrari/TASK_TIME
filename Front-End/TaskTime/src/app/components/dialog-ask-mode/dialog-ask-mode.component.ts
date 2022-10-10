import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IsecondPageObject } from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';

@Component({
  selector: 'app-dialog-ask-mode',
  templateUrl: './dialog-ask-mode.component.html',
  styleUrls: ['./dialog-ask-mode.component.css'],
})
export class DialogAskModeComponent implements OnInit {
  constructor(
    private service: TaskTimeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  emotionList: any[] = ['خیلی بد', 'بد', 'متوسط', 'خوب', 'عالی'];
  emotion: string = '';
  employeeId: number;
  description = '';
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
    }).subscribe();
  }
  ngOnInit(): void {
    this.employeeId = this.data.id;
  }
}
