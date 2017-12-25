import { Injectable ,Inject} from '@angular/core';
import {Login} from './login';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG} from '../appconfig/appconfig.service';
import { IAppConfig} from '../appconfig/Iapp.config';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
@Injectable()
export class LoginService {
  
   isLoggedIn: boolean=false;
  // isValidLogin: boolean=false;
 // public loggedInUser: string;
  

  constructor(private httpService: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {}

  findUser(login: Login){ 
    console.log('find user triggered from login ');
    return this.httpService.get<Login[]>(this.config.ContactAppAPI + 'findUser/' + login.userName)     
  }

  getValidateUser(login: Login){ 
   return this.httpService.get<Login[]>(this.config.ContactAppAPI + 'findUser/' + login.userName) 
  }
    
  //   console.log(this.config.ContactAppAPI + 'validateUser/' + login.userName);
  //  // console.log('user password from API' + Userpassword);
  //   console.log('user password from API finish');
  //    if(login.password) 
  //    {
  //      console.log('success');
  //      this.isLoggedIn=true;
  //      return true;
  //    }
  //    console.log('fail');
  //    return false;
  

  loginStatus(loginStatus){
    console.log('loggedInUser status from loginComponent is ' + loginStatus);
   this.isLoggedIn = loginStatus;
   sessionStorage.isLoggedIn=loginStatus;
   
   console.log('sessionStorage.isLoggedIn status from loginComponent is ' + sessionStorage.isLoggedIn);
    return sessionStorage.isLoggedIn;
  }

}
