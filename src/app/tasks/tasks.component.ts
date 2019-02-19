import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any = {};
  user: Object;
  constructor(private task: TaskService,private route:Router) { }

  ngOnInit() {
    this.task.getTasks().subscribe(
      data => this.tasks = data 
    );

    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  deletetask(id) {
    this.task.deletetask(id)
    .subscribe(
        data => {
          this.task.getTasks().subscribe(
            data => this.tasks = data 
          );
        },
        error => {
            console.log(error.error);
        });
}


taskStatus(status, id) {
  this.task.taskStatus(status, id)
      .subscribe(
          data => {
            this.task.getTasks().subscribe(
              data => this.tasks = data 
            );
              
          },
          error => {
              console.log(error.error);
          });
}

}
