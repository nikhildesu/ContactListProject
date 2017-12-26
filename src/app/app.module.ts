import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
 //import { RegistrationComponent } from './registration/registration.component';
 import {RegistrationModule} from './registration/registration.module';
 import {LoginModule} from './login/login.module';
 import {SharedModule} from './shared/shared.module';
//   import { MatButtonModule} from '@angular/material';
//  import { MatRadioModule} from '@angular/material';
 import { RegistrationService} from './service/registration/registration.service';
//  import { PostComponent } from './post/post.component';
//  import { PostListComponent } from './post/post-list/post-list.component';
import {PostModule} from './post/post.module';
import {PostService } from './service/post/post.service';
import {LoginService } from './service/login/login.service';
import {ManageContactsService } from './service/manageContacts/manage-contacts.service';
import { UserDetailsService } from './service/userDetails/user-details.service';
import {RouterModule} from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import {HttpinterceptorService} from './interceptor/httpinterceptor.service';
import { APP_CONFIG, API_CONFIG} from './service/appconfig/appconfig.service';
// import { LoginComponent } from './login/login.component'; 

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SecAdminModule} from './sec-admin/sec-admin.module';
import {HomeModule} from './home/home.module';
import {AuthGuard} from './service/authGuard/auth.guard';
import { LogoutComponent } from './logout/logout.component'

import {LogoutModule} from './logout/logout.module';
import {RegistrationSuccessModule} from '../../src/app/registration-success/registration-success.module';
import {ManageRolesModule} from '../../src/app/manage-roles/manage-roles.module';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RegistrationModule,
    HttpClientModule,
    LoginModule,
    SharedModule,
    PostModule,
    HomeModule,
    SecAdminModule,
    RegistrationSuccessModule,
    ManageRolesModule,
    RouterModule    
  ],
  providers: [RegistrationService,PostService,LoginService,ManageContactsService,UserDetailsService,
    AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true},
  {provide: APP_CONFIG, useValue: API_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
