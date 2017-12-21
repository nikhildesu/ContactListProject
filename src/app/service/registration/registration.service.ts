import { Injectable,Inject } from '@angular/core';

import {Registration} from './registration'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG} from '../appconfig/appconfig.service';
import { IAppConfig} from '../appconfig/Iapp.config';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
@Injectable()
export class RegistrationService {

  

  constructor(private httpService: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) { }

  addRegistrationDetails(registration: Registration) 
  {
    console.log('Registration JSON is ' +registration);
    return this.httpService.post(this.config.ContactAppAPI+ 'registration', registration);
    
  }
  getRegistrationDetails() 
  {
  

  }




}
