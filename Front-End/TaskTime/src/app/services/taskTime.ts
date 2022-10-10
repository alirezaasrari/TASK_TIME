import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskTimeService {
readonly taskTimeUrl = 'https://localhost:7005/api';

  constructor(private http:HttpClient) { }

// employee services

getAllEmployee():Observable<any[]> {
return this.http.get<any>(this.taskTimeUrl + '/Employee/get-all-employee');
}
// second page services

postsecondpage(data:any){
  return this.http.post(this.taskTimeUrl + '/SecondPage/post-employee-secondpagedata', data);
}

}
