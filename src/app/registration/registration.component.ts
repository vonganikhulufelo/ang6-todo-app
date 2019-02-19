import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router  } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  constructor(private user: UserService, private router:Router) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('loggedin'))){
        this.router.navigate(['tasks']);
      }
  }


  register() {
    this.user.register(this.model.name, this.model.email, this.model.password)
        .subscribe(
            data => {
                this.router.navigate(['']);
            },
            error => {
                console.log(error.error);
            });
}


}
