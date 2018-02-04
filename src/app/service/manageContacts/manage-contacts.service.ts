import { Injectable,Inject } from '@angular/core';
import {Contact} from './contact';
import {Registration} from '../registration/registration';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG} from '../appconfig/appconfig.service';
import { IAppConfig} from '../appconfig/Iapp.config';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ManageContactsService {

  contact: Contact = new Contact();
  updateContactData: any;
  deleteOneContactData: any;
  grantAccessData: any;
  revokeAccessData: any;

  constructor(private httpService: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) { }

  getMaxContactID() 
  {
    return this.httpService.get<Contact[]>(this.config.ContactAppAPI+ 'getMaxContactID');
  }

  addContacts(contact: Contact) 
  {
    return this.httpService.post(this.config.ContactAppAPI+ 'addContacts', contact);
  }
  getSpecificContacts(userid) 
  {   
    return this.httpService.get<Contact[]>(this.config.ContactAppAPI + 'getSpecificContacts/'+userid);    
  }
  getContacts() 
  {   
    return this.httpService.get<Contact[]>(this.config.ContactAppAPI + 'getcontacts');    
  }
  updateContacts(contact: Contact) 
  {
    this.updateContactData=contact;
    console.log('update requested for contact ' +this.updateContactData._id);
    return this.httpService.put(this.config.ContactAppAPI+ 'updateContacts/'+this.updateContactData._id, contact);
  }
  deleteOneContact(contact: Contact) 
  {
    this.deleteOneContactData=contact;
    console.log('delete requested for contact ' +this.deleteOneContactData._id);
    return this.httpService.delete(this.config.ContactAppAPI+ 'deleteSpecificContact/'+this.deleteOneContactData._id);
 
  }

  deleteContactsForUser(userid){
    console.log('specific delete requested for all');
    return this.httpService.delete<Contact[]>(this.config.ContactAppAPI + 'deleteContactsForUser/'+userid); 
  }

  deleteContacts() 
  {
    console.log('delete requested for all');
    return this.httpService.delete(this.config.ContactAppAPI+ 'deleteContacts');
 
  }

  getUsers(){
    return this.httpService.get<Registration[]>(this.config.ContactAppAPI + 'getUsers');    
  }

  
  GrantAccess(user: Registration) 
  {
    this.grantAccessData=user;
    console.log('update requested for contact ' +this.grantAccessData._id);
    return this.httpService.put(this.config.ContactAppAPI+ 'GrantAccess/'+this.grantAccessData._id, user);
  }
  RevokeAccess(user: Registration) 
  {
    this.revokeAccessData=user;
    console.log('update requested for contact ' +this.revokeAccessData._id);
    return this.httpService.put(this.config.ContactAppAPI+ 'RevokeAccess/'+this.revokeAccessData._id, user);
  }
  

}
