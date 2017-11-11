import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
 //import { RegistrationComponent } from './registration/registration.component';
 import {RegistrationModule} from './registration/registration.module'
// import {SharedModule} from './shared/shared.module'
//   import { MatButtonModule} from '@angular/material';
//  import { MatRadioModule} from '@angular/material';
 import { RegistrationService} from './service/registration/registration.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RegistrationModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
