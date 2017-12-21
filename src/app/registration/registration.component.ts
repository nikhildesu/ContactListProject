import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Registration} from '../service/registration/registration';
import  {RegistrationService} from '../service/registration/registration.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
//registration: Registration = new Registration();
registration: Registration = new Registration();
registrationForm: FormGroup;
formSubmitted: boolean = false;
  constructor(private registrationService: RegistrationService) { }
  addRegistration(){   
    console.log('Registration JSON component Fname ' +this.registration.firstName);
    this.registration.createdDate=   new Date(); 
    this.registration.userRole= 'user';
    console.log('Registration JSON in componenet createdDate ' +this.registration.createdDate);
      this.registrationService.addRegistrationDetails(this.registration).subscribe((data) => console.log(data));
     this.formSubmitted = true;
     this.registrationForm.reset();
  }

  ngOnInit(): void {
    this.registrationService.getRegistrationDetails();
  }

}
