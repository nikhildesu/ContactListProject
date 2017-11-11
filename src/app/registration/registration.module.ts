import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { RegistrationComponent } from './registration.component';
// import {SharedModule} from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material';
import { MatRadioModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule
  ],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent], 
})
export class RegistrationModule { }
