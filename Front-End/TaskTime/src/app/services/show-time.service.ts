import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ShowTimeService {
  constructor() {}
  workTimes: any[] = [];
  total: any[] = [];
  green: any[] = [];
  red: any[] = [];
}
 