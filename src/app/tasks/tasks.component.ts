import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any = {};
  constructor(private task: TaskService) { }

  ngOnInit() {
    this.task.getTasks().subscribe(
      data => this.tasks = data 
    );
  }

}
