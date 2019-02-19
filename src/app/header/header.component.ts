import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any = {};
  public loggedIn : any;
  sidebarposition: any = {};
  constructor(private router:Router) { }

  ngOnInit() {
    if(this.currentUser){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.loggedIn = JSON.parse(localStorage.getItem('loggedin'));
      }

      this.sidebarposition = false;

  }

  hide(){
    if(this.sidebarposition == "false"){
      this.sidebarposition = "true"
      document.getElementById('idname').classList.remove('hide');
    }else{
      document.getElementById('idname').classList.add('hide');
      this.sidebarposition = "false"
    }
  }

  ngOnDestroy(){
    this.sidebarposition = false;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedin');
    this.router.navigate(['/']);
  }

}
