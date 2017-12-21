import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Contact} from '../service/manageContacts/contact';
import  {ManageContactsService} from '../service/manageContacts/manage-contacts.service';
import  {UserDetailsService} from '../service/userDetails/user-details.service';
import { Router } from '@angular/router';
import {Registration} from '../service/registration/registration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  contact: Contact = new Contact();
  userDetails: Registration = new Registration(); //addded to get user details
  //sessionuserDetails: Registration = new Registration();
  contactForm: FormGroup;
  formSubmitted: boolean = false;
  contacts: Contact[];
  public loggedInUser: string;
  public userRole: string;
  hidden: boolean = true;

  public sessionAvailable: string;
  constructor(private manageContactsService: ManageContactsService, private router: Router, private userDetailsService: UserDetailsService) { }


  ngOnInit() {
    console.log('session check for user id '  +sessionStorage.sessionUserId);
    if(sessionStorage.sessionUserId!= null){
      console.log('session available');
      this.sessionAvailable = "YES";
    }
    else{
      console.log('NO session');
        this.sessionAvailable = "NO";
      
    }
     this.userDetails = this.userDetailsService.getUserData();
     //this.sessionuserDetails=  sessionStorage.userData;
     console.log('Logged In Details retreived from session' +sessionStorage.sessionUserId);
    this.loggedInUser= sessionStorage.sessionUserId;
    this.userRole= this.userDetails.userRole;
    console.log('loggedInUser is ' +this.userRole);
    if(this.userRole= 'admin'){
      this.hidden = false;
      console.log('hidden is ' +this.hidden);
    }

    this.manageContactsService.getSpecificContacts(this.loggedInUser).subscribe((data) =>     
    this.contacts = data,
     (err) => console.log(err.message));
  
  }


  addContacts(){
    this.contact.createdDate=   new Date(); 
    this.contact.createdBy=this.loggedInUser;
    // this.manageContactsService.getMaxContactID().subscribe((data) => {
    //   console.log(data);
    // this.contact.contactID= data.contactCount;
    
    this.manageContactsService.addContacts(this.contact).subscribe((data) => console.log(data));
   this.formSubmitted = true;
   this.contactForm.reset();
  }

getContacts(){
  
}

  cnameFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  cnumberFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
