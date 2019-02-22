import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router  } from '@angular/router';
@Component({
  selector: 'app-upadteuser',
  templateUrl: './upadteuser.component.html',
  styleUrls: ['./upadteuser.component.scss']
})
export class UpadteuserComponent implements OnInit {
  model: any = {};
  constructor(private user: UserService, private router:Router) { }

  ngOnInit() {
    this.model = JSON.parse(localStorage.getItem('currentUser'));
  }

  updateUser() {
    this.user.updateUser(this.model.name, this.model.email, this.model.password, this.model.userImage)
        .subscribe(
            data => {
                this.router.navigate(['']);
            },
            error => {
                console.log(error.error);
            });
}

}
