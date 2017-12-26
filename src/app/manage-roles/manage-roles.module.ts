import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {RoutingModule} from '../routing/routing.module'
import {ManageRolesComponent} from '../manage-roles/manage-roles.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    RouterModule.forRoot([
      { path : 'ManageRoles' , component: ManageRolesComponent}
    ])
  ],
  declarations: [ManageRolesComponent]
})
export class ManageRolesModule { }
