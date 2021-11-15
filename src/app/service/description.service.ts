import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private subject = new BehaviorSubject<any>('No-Description')

  constructor() { }

  sendDescription(description: Task) {
    this.subject.next(description)
  }

  getDescription() {
    return this.subject.asObservable()
  }


}
