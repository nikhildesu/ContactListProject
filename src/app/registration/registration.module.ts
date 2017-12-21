import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { RegistrationComponent } from './registration.component';
 import {SharedModule} from '../shared/shared.module';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//  import { MatButtonModule} from '@angular/material';
//  import { MatRadioModule} from '@angular/material';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path : 'registration' , component: RegistrationComponent}
    ])
  ],
  declarations: [RegistrationComponent],
  exports: []
})
export class RegistrationModule { }
