import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router  } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private data: DataService, private router:Router) { }

  ngOnInit() {
      if(JSON.parse(localStorage.getItem('loggedin'))){
        this.router.navigate(['tasks']);
      }
  }

  login() {
    this.data.login(this.model.email, this.model.password)
        .subscribe(
            data => {
                
                console.log(data.user);
                localStorage.setItem('currentUser', JSON.stringify(data.user) );
                localStorage.setItem('loggedin', JSON.stringify('true'));
                this.router.navigate(['tasks']);
            },
            error => {
                console.log(error.error);
            });
}



}
