import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent} from '../login/login.component';
import { HomeComponent} from '../home/home.component';
import { RegistrationComponent} from '../registration/registration.component';
import {SecAdminComponent} from '../sec-admin/sec-admin.component';
import {AuthGuard} from '../service/authGuard/auth.guard'
import { LogoutComponent} from '../logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path : 'login' , component: LoginComponent},
      {path : ':any/:any/login' , component: LoginComponent},
      {path : 'registration' , component: RegistrationComponent, canActivate: [AuthGuard]},
      {path : ':any/registration' , component: RegistrationComponent},
      {path : 'home' , component: HomeComponent, canActivate: [AuthGuard] },     
      { path : 'SecAdmin' , component: SecAdminComponent, canActivate: [AuthGuard]},
      { path : ':any/logout' , component: LogoutComponent, canActivate: [AuthGuard]},
      {path: '' , redirectTo: 'login' , pathMatch:'full'},
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule] 
})
export class RoutingModule { }
