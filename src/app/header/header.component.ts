import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any = {};
  public loggedIn : any;
  constructor(private router:Router) { }

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
