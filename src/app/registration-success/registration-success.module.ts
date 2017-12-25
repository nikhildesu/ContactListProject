import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {RoutingModule} from '../routing/routing.module'
import {RegistrationSuccessComponent} from '../registration-success/registration-success.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    RouterModule.forRoot([
      { path : 'RegSuccess' , component: RegistrationSuccessComponent}
    ])
    // FormsModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatRadioModule
  ],
  declarations: [RegistrationSuccessComponent]
})
export class RegistrationSuccessModule { }




