import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import  {ManageContactsService} from '../service/manageContacts/manage-contacts.service';
import  {UserDetailsService} from '../service/userDetails/user-details.service';
import { Router } from '@angular/router';
import {Registration} from '../service/registration/registration';
import {MatDialog} from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManageRolesComponent implements OnInit {
  user: Registration = new Registration();
  userDetails: Registration = new Registration(); //addded to get user details
  SecAdminForm: FormGroup;
  formSubmitted: boolean = false;
  users: Registration[];
  public loggedInUser: string;
  public sessionAvailable: string;
  public userRole: string;
  public Notification: string;
  hidden: boolean = true;
  public loggedInUserName: string;
  public ErrorNotify: string;
  public AdminRole: string;
  
  constructor(private location: Location,public dialog: MatDialog, private manageContactsService: ManageContactsService, private router: Router, private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    if(sessionStorage.sessionUserId!= null){
      console.log('session available');
      this.sessionAvailable = "YES";
    }
    else{
      console.log('NO session');
        this.sessionAvailable = "NO";
      
    }
    this.loggedInUserName= sessionStorage.sessionUserName;
     this.userDetails = this.userDetailsService.getUserData();
     //console.log('Logged In Details retreived as follows' +this.userDetails);
    this.loggedInUser= sessionStorage.sessionUserId;
    this.userRole= sessionStorage.sessionUserRole;
    console.log('loggedInUser is ' +this.loggedInUser + ' as role ' + this.userRole);
    if(this.userRole === "admin"){
      this.hidden = false;
      this.AdminRole = "YES";
      console.log('user role found  is ' +this.userRole);
      this.manageContactsService.getUsers().subscribe((data) =>     
      this.users = data,
       (err) => console.log(err.message));
    }else{    
      this.AdminRole = "NO";  
      console.log('This page is available only for Admins.')
      this.ErrorNotify='This page is available only for Admins.';
    }
  
  }


GrantAccess(user: Registration){
  console.log('Grant requested for user .' +this.user.userid);
  if( this.manageContactsService.GrantAccess(user).subscribe((data) => console.log(data))){
   location.reload();
   this.Notification = 'Admin Granted Successfully ';
  }
}

RevokeAccess(user: Registration){
  console.log('Grant requested for user .' +this.user.userid);
    if( this.manageContactsService.RevokeAccess(user).subscribe((data) => console.log(data))){
     location.reload();
     this.Notification = 'Revoked access  Successfully ';
    }
  }





}

