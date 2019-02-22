import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarposition: string;
  constructor() { }

  ngOnInit() {
    this.sidebarposition = "false"
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
}
