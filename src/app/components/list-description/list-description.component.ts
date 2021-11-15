import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/tasks';
import { DescriptionService } from 'src/app/service/description.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-list-description',
  templateUrl: './list-description.component.html',
  styleUrls: ['./list-description.component.css']
})
export class ListDescriptionComponent implements OnInit {
  showDescription: boolean = false;
  descriptionForm: boolean = false
  task: Task
  descriptionText: string;

  constructor(private taskService: TaskService, private descriptionService: DescriptionService) { }

  ngOnInit(): void {
    this.getDescription()
  }

  getDescription() {
    this.descriptionService.getDescription().subscribe((data: Task) => {
      if (typeof (data) === 'string') {
        if (data == 'No-Description') {
          this.descriptionText = data
        } else if (data == '') {
          this.descriptionText = ''
        }
      } else {
        this.descriptionText = ''
      }
      this.task = data
      this.descriptionForm = false
    })
  }

  addDescription() {
    this.descriptionForm = !this.descriptionForm
    if (this.descriptionForm == true) {
      this.descriptionText = ''
    }
  }

  save() {
    this.addDescription();
    if (!this.descriptionText) {
      alert('Description required to save')
    } else if (this.descriptionText.length > 40) {
      alert('Maximum 40 characters allowed')
    } else {
      this.task.description.push(this.descriptionText)
      this.descriptionText = ''
      this.taskService.addDescription(this.task).subscribe()
    }
  }
}
