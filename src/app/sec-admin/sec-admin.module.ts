import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecAdminComponent } from './sec-admin.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {RoutingModule} from '../routing/routing.module';
import {LoginModule} from '../login/login.module';
import { SecAdminEditComponent } from './sec-admin-edit/sec-admin-edit.component';
import {HomeModule} from '../home/home.module';
@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    LoginModule,
    RouterModule.forChild([
      { path : 'SecAdmin' , component: SecAdminComponent,
      children: [
         { path: '', component: SecAdminEditComponent }
      ]}
    ])
  ],
  declarations: [SecAdminComponent, SecAdminEditComponent],
  exports: []
})
export class SecAdminModule { }
