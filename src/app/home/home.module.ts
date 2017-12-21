import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home.component';
import {RoutingModule} from '../routing/routing.module';
import {LoginModule} from '../login/login.module';
import {RouterModule} from '@angular/router';
// import {MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,    
    SharedModule,
    LoginModule,
    RouterModule.forRoot([
      { path : 'home' , component: HomeComponent}
    ])
  ],
  declarations: [HomeComponent], 
  exports: []
})
export class HomeModule { }
