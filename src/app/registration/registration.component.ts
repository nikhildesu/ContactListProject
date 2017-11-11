import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Registration} from '../service/registration/registration';
import  {RegistrationService} from '../service/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
//registration: Registration = new Registration();
registration: Registration = new Registration();
  
  constructor(private registrationService: RegistrationService) { }
  addRegistration(){
    this.registrationService.addRegistrationDetails(this.registration); 
   
    
  }

  ngOnInit(): void {
    this.registrationService.getRegistrationDetails();
  }

}
