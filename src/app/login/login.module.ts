import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { MatButtonModule} from '@angular/material';
// import { MatRadioModule} from '@angular/material';
import { LoginComponent } from './login.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {RoutingModule} from '../routing/routing.module'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    RouterModule.forRoot([
      { path : 'login' , component: LoginComponent}
    ])
    // FormsModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatRadioModule
  ],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule { }
