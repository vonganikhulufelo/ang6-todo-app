import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng6-proj';
 
  currentUser: any = {};
  public loggedIn : any;
  constructor(private http:Http, private router:Router){
    
  }

  ngOnInit() {
    if(this.currentUser){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.loggedIn = JSON.parse(localStorage.getItem('loggedin'));
      }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedin');
    this.router.navigate(['/']);
  }

}
