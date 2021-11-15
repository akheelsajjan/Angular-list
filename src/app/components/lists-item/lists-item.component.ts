import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/tasks';

@Component({
  selector: 'app-lists-item',
  templateUrl: './lists-item.component.html',
  styleUrls: ['./lists-item.component.css']
})
export class ListsItemComponent implements OnInit {
  // @Input() task: Task
  // @Output() taskDetails = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  // getDetails(id: number) {
  //   this.taskDetails.emit(id)
  // }



}
