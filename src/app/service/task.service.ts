import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Task } from '../models/tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl: string = 'http://localhost:5000/tasks'
  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl).pipe(
      retry(2)
    )
  }

  getSingleTask(id: Number) {
    const url = this.apiUrl + '/' + id
    return this.httpClient.get<Task>(url).pipe(
      retry(2)
    )
  }

  addDescription(task: Task) {
    const url = this.apiUrl + '/' + task.id
    return this.httpClient.put<Task>(url, task, httpOptions).pipe(
      retry(2)
    )
  }

}
