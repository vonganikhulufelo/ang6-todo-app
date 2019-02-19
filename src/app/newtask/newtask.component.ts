import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss']
})
export class NewtaskComponent implements OnInit {
  model: any = {};
  constructor(private router:Router,private task: TaskService ) { }

  ngOnInit() {
  }

  newtask() {
    this.task.newtask(this.model.title, this.model.description)
        .subscribe(
            data => {
                this.router.navigate(['']);
                
            },
            error => {
                console.log(error.error);
            });
}

}
