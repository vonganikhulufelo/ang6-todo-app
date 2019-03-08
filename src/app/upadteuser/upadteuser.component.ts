import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router  } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upadteuser',
  templateUrl: './upadteuser.component.html',
  styleUrls: ['./upadteuser.component.scss']
})
export class UpadteuserComponent implements OnInit {
  model: any = {};
  constructor(private user: UserService, private router:Router,private http: HttpClient) { }

  ngOnInit() {
    this.model = JSON.parse(localStorage.getItem('currentUser'));
  }

  selectedFile: File

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  updateUser() {
    const uploadData = new FormData();
  uploadData.append('userImage', this.selectedFile, this.selectedFile.name);
  uploadData.append('name', this.model.name);
  uploadData.append('email', this.model.email);
  uploadData.append('password', this.model.password);
    this.http.patch('http://localhost:3000/users/'+ JSON.parse(localStorage.getItem('currentUser')).id, uploadData, {
      reportProgress: true,
      observe: 'events',
      headers: {'authorization': 'Bearer '+ JSON.parse(localStorage.getItem('token'))}
    })
      .subscribe(event => {
        console.log(event);
        this.router.navigate(['']);
      });
  }

  updateUser1() {
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
