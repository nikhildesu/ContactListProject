import { Injectable,Inject } from '@angular/core';
import {Contact} from './contact';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG} from '../appconfig/appconfig.service';
import { IAppConfig} from '../appconfig/Iapp.config';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ManageContactsService {

  contact: Contact = new Contact();

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
    console.log('update requested for contact ' +contact._id);
    return this.httpService.put(this.config.ContactAppAPI+ 'updateContacts/'+contact._id, contact);
  }
  deleteOneContact(contact: Contact) 
  {
    console.log('delete requested for contact ' +contact._id);
    return this.httpService.delete(this.config.ContactAppAPI+ 'deleteSpecificContact/'+contact._id);
 
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
}
