import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskTimeService {
  readonly taskTimeUrl = 'https://localhost:7005/api';

  constructor(private http: HttpClient) {}

  // employee services

  postEmployee(data: any) {
    return this.http.post(this.taskTimeUrl + '/Employee/add-employee', data);
  }

  getAllEmployee(): Observable<any[]> {
    return this.http.get<any>(this.taskTimeUrl + '/Employee/get-all-employee');
  }

  deleteEmployee(id: number | string) {
    return this.http.delete(
      this.taskTimeUrl + `/Employee/delete-employee?id=${id}`
    );
  }

  // second page services

  postsecondpage(data: any) {
    return this.http.post(
      this.taskTimeUrl + '/SecondPage/post-employee-secondpagedata',
      data
    );
  }

  getAllSecondPages(): Observable<any[]> {
    return this.http.get<any>(
      this.taskTimeUrl + '/SecondPage/get-all-second-page-data'
    );
  }

  getSecondPageById(id: number) {
    return this.http.get(
      this.taskTimeUrl + `/SecondPage/get-employee-data-by-id/${id}`
    );
  }

  deleteEmployeeSecondPage(id: number | string) {
    return this.http.delete(
      this.taskTimeUrl + `/SecondPage/delete-employee-second-page-data?id=${id}`
    );
  }

  // third page services

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(
      this.taskTimeUrl + `/Employee/get-employee-by-id/${id}`
    );
  }

  // lastpage services
  postlastpage(data: any) {
    return this.http.post(
      this.taskTimeUrl + '/LastPage/add-lastpage-data',
      data
    );
  }

  deleteEmployeeLastPage(id: number) {
    return this.http.delete(
      this.taskTimeUrl + `/LastPage/delete-employee-lastpage-data?id=${id}`
    );
  }

  getAllLastPages(): Observable<any[]> {
    return this.http.get<any>(this.taskTimeUrl + '/LastPage/get-all-lastpages');
  }

  getLastPageById(id: number): Observable<any> {
    return this.http.get<any>(
      this.taskTimeUrl + `/LastPage/get-last-page-by-id/${id}`
    );
  }

  // persian calendar api

  getpersiandate(): Observable<any> {
    return this.http.get<any>('https://api.keybit.ir/time/');
  }
}
