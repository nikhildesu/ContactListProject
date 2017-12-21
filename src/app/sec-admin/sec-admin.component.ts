import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Contact} from '../service/manageContacts/contact';
import  {ManageContactsService} from '../service/manageContacts/manage-contacts.service';
import  {UserDetailsService} from '../service/userDetails/user-details.service';
import { Router } from '@angular/router';
import {Registration} from '../service/registration/registration';
import { ViewEncapsulation } from '@angular/core';
import {MatDialog} from '@angular/material';
import {SecAdminEditComponent} from './sec-admin-edit/sec-admin-edit.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-sec-admin',
  templateUrl: './sec-admin.component.html',
  styleUrls: ['./sec-admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecAdminComponent implements OnInit {
  contact: Contact = new Contact();
  userDetails: Registration = new Registration(); //addded to get user details
  SecAdminForm: FormGroup;
  formSubmitted: boolean = false;
  contacts: Contact[];
  public loggedInUser: string;
  public userRole: string;
  public DeleteNotification: string;
  hidden: boolean = true;
  constructor(private location: Location,public dialog: MatDialog, private manageContactsService: ManageContactsService, private router: Router, private userDetailsService: UserDetailsService) { }
  
  
    ngOnInit() {
      
       this.userDetails = this.userDetailsService.getUserData();
       //console.log('Logged In Details retreived as follows' +this.userDetails);
      this.loggedInUser= sessionStorage.sessionUserId;
      this.userRole= sessionStorage.sessionUserRole;
      console.log('loggedInUser is ' +this.loggedInUser + ' as role ' + this.userRole);
      if(this.userRole === "admin"){
        this.hidden = false;
        console.log('user role found  is ' +this.userRole);
        this.manageContactsService.getContacts().subscribe((data) =>     
        this.contacts = data,
         (err) => console.log(err.message));
      }else{      
        console.log('user role found  is ' +this.userRole);
       this.manageContactsService.getSpecificContacts(this.loggedInUser).subscribe((data) =>     
       this.contacts = data,
        (err) => console.log(err.message));
     
      }
    
    }
  
  getContacts(){ 
    
  }

  deleteContact(contact: Contact){

    if( this.manageContactsService.deleteOneContact(contact).subscribe((data) => console.log(data))){
     location.reload();
     this.DeleteNotification = 'Contact Deleted Successfully ';
    }
  }

  deleteContacts(){
    
        if( this.manageContactsService.deleteContacts().subscribe((data) => console.log(data))){
         location.reload();
         this.DeleteNotification = 'Contact Deleted Successfully ';
        }
      }



  
    cnameFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    cnumberFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

      editContact(contact: Contact): void {
      const dialogRef = this.dialog.open(SecAdminEditComponent, {
        width: '250px',
        data: contact
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
  
  

}
