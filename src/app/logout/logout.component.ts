import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('before full session data after logout is '  +sessionStorage);
    console.log('before session id after logout is '  +sessionStorage.sessionUserId);
    sessionStorage.clear();
    console.log('full session data after logout is '  +sessionStorage);
    console.log('session id after logout is '  +sessionStorage.sessionUserId);
    //setTimeout((router: Router) => {
      //this.router.navigate(['login']);
    //},5000); 
    
  }

}
