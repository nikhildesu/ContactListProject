import { Injectable } from '@angular/core';
import {Registration} from '../registration/registration';

@Injectable()
export class UserDetailsService {
userData: Registration = new Registration();
sessionData: Registration = new Registration();
// isLoggedIn: boolean = false;
  constructor() { }

  public setUserData(userDetails) {
    this.userData = userDetails;
    //this.isLoggedIn=true;
    sessionStorage.sessionUserId=this.userData.userid;    
    sessionStorage.sessionUserRole=this.userData.userRole;    
    console.log('User details are '+this.userData);
}

public getUserData(): any {
    return this.userData;
}


}
