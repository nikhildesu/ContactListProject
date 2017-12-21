import { Component, OnInit } from '@angular/core';
import { RegistrationService} from './service/registration/registration.service'
import { Registration} from './service/registration/registration'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public sessionAvailable: string;
  constructor(){ }

  ngOnInit() {
    console.log('session check '  +sessionStorage);
    console.log('session check for user id '  +sessionStorage.sessionUserId);
    if(sessionStorage.sessionUserId!= null){
      console.log('session available');
      this.sessionAvailable = "YES";
    }
    else{
        this.sessionAvailable = "NO";
        console.log('session check '  +sessionStorage);
        console.log('session check for user id '  +sessionStorage.sessionUserId);
      
    }
    
}

}
