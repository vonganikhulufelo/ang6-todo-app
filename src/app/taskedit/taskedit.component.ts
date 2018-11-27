import { Component, OnInit } from '@angular/core';
import { parse } from 'url';
import { ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.scss']
})
export class TaskeditComponent implements OnInit {
   
  model: any = {};
  taskId: Object;
  task$: Object;
  tasks: any = {};
  constructor(private router:ActivatedRoute,private task: TaskService,private route:Router) { 
    this.router.params.subscribe( params => this.task$ = params.id );
  }

  ngOnInit() {

    this.task.getTaskId(this.task$).subscribe(
      data => this.model = data
      );

      this.task.getTasks().subscribe(
        data => this.tasks = data 
      );
  }

  edittask() {
    this.task.edittask(this.model.title, this.model.description, this.model.duedate, this.model.id)
        .subscribe(
            data => {
                this.route.navigate(['']);
                
            },
            error => {
                console.log(error.error);
            });
}

}
