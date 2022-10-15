import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IlastPage } from '../interfaces/elements';

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
  return this.http.post(this.taskTimeUrl + '/SecondPage/post-employee-secondpagedata', data)
}
//.catch(this.errorHandler);
// errorHandler(error: HttpErrorResponse){
//   return Observable.throw(error.message || "server Error");
// }
postlastpage(data:any){
  return this.http.post(this.taskTimeUrl + '/LastPage/add-lastpage-data' , data)  
}

// third page services

getEmployeeById(id:number):Observable<IlastPage> {
  return this.http.get<IlastPage>(this.taskTimeUrl + `/Employee/get-employee-by-id/${id}`);
  }
}
