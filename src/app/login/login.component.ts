import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { LoginService } from '../service/login/login.service';
import {UserDetailsService} from '../service/userDetails/user-details.service';
import { Login } from '../service/login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  loginData: any;
  private status: boolean;
  public loggedInUser: string;
  public loginError: string;
  public id:string;
  //status: boolean=false;
  //var isValidLogin = false;
  isLoggedIn: boolean = false;
  // var userPwd;
  // userPwd=null;

  constructor(private loginService: LoginService, private router: Router,private userDetailsService: UserDetailsService) { }

  ngOnInit() {
  }

  
  ValidateLogin() {
  //  if( this.loginService.findUser(this.login).subscribe((data) => {
      
          
  //         //console.log('find user response received' +data ),
          
  //         // (err) => console.log(err)
  //            this.id = data.userid;
  //           console.log('find user response id is  ' +this.id);
  //           if (this.id != null) {
  //             console.log('user found and triggering to validate');
  //           }
  //           else{
  //             console.log('user not found');
  //           }
  //         })){
            
  //           console.log('user service success');
  //           if (this.id != null) {
  //             console.log('user id not found');
  //           }
  //           else{
  //             console.log('no user id ');
  //           }

  //         }
  //         else{
  //           console.log('user service not found');
  //         }  
     let loggedPwd = this.login.password;
     console.log('user entered Pwd is ' + loggedPwd);

    this.loginService.getValidateUser(this.login).subscribe((data) => {
      this.loginData=data;
     console.log(data);
     let userPwd = this.loginData.password; 
     console.log('Pwd from db is ' + userPwd);
     if (loggedPwd === userPwd) { 
       console.log('login success');
       this.isLoggedIn = true;
       // this.loggedInUser = data.userName;
       // console.log('loggedInUser value is ' + this.loggedInUser);
       console.log('isValidLogin value is ' + this.isLoggedIn);
      if(this.loginService.loginStatus(this.isLoggedIn)){
       this.userDetailsService.setUserData(data);
         this.router.navigate(['/home'])
        this.status=true;
       }
      
     // this.nextMethod();
     }
     else {
       //isValidLogin = false;
      console.log('login fail');
       this.status=false;
       this.isLoggedIn = false;
       this.loginService.loginStatus(this.isLoggedIn);
       this.loginError = 'Please enter correct Username and password';
       //this.nextMethod();
     }
   });    
} 
  //  nextMethod(): void {
  //   if(status = 'true'){
  //     //this.router.navigate(['/home']);
  // }
  // else {
  //       console.log('Navigating to Error Page');
  //     // this.router.navigate(['/error']);
  //     }
  //   }
    // let loggedPwd = this.login.password;
    // console.log('user entered Pwd is ' + loggedPwd);
    // let loginData = this.loginService.getValidateUser(this.login).subscribe(function (data) {
      
    //   console.log(data);
    //   let userPwd = data.password;
    //   console.log('Pwd from db is ' + data.password);
    //   if (loggedPwd === userPwd) {
    //     console.log('login success');
    //     this.isLoggedIn = true;
    //     this.isValidLogin = true;
    //     console.log('isValidLogin value' + this.isValidLogin);
    //     console.log('isValidLogin value' + this.isLoggedIn);
    //    // this.router.navigate(['/home'])
       
    //   }
    //   else {
    //     //isValidLogin = false;
    //     console.log('login fail');
    //   }
    // });    
  

        
  
  // if (this.isValidLogin) {
  //   console.log('Navigating to Home');
  //    this.router.navigate(['/home'])
  //  }
  //  else {
  //    console.log('Navigating to Error Page');
  //    this.router.navigate(['/error']);
  //  }

}
