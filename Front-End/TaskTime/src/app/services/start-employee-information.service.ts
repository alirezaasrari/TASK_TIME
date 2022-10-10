import { Injectable } from '@angular/core';
import { Elements } from '../interfaces/elements';

@Injectable({
  providedIn: 'root'
})
export class StartEmployeeInformationService {

  constructor() { }

  startInformation :Elements[] =[]
}
