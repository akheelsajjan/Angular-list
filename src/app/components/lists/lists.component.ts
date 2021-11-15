import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Task } from 'src/app/models/tasks';
import { DescriptionService } from 'src/app/service/description.service';
import { SearchService } from 'src/app/service/search.service';
import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  @Input() searchKey: any
  selectedTaskId: number
  ApiFail: boolean;

  tasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private descriptionService: DescriptionService,
    private searcService: SearchService
  ) { }

  ngOnInit(): void {
    this.getTask()
    this.search()
  }

  getTask(key?: string) {
    this.taskService.getTasks()
      .pipe(
        map(data => this.filterTask(data, key))
      )
      .subscribe(
        (data) => {
          this.tasks = data
          this.ApiFail = false
        },
        (error) => {
          this.ApiFail = true
        }
      )
  }

  filterTask(task: Task[], key: string | undefined) {
    if (key === '' || key === undefined || key === null) {
      return task
    } else {
      const searchKey = key.toLocaleLowerCase()
      return task.filter(data => data.listName.toLowerCase().includes(searchKey))
    }
  }

  getTaskDetails(id: number) {
    this.taskService.getSingleTask(id).
      subscribe(
        (data) => {
          this.descriptionService.sendDescription(data)
        })
  }

  search() {
    this.searcService.onResults().subscribe((data) => {
      this.getTask(data)
    })
  }

  highlightRow(id: number) {
    this.selectedTaskId = id
  }


}
