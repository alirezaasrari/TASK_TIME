import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitCounterService {
  constructor() { }
  unitIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  setUnitIndex(unitIndex:number){
     this.unitIndex$.next(unitIndex);
  }

}
