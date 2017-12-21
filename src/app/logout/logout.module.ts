import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {RoutingModule} from '../routing/routing.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    RouterModule.forRoot([
      { path : 'logout' , component: LogoutComponent}
    ])
    // FormsModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatRadioModule
  ],
  declarations: [LogoutComponent],
  exports: []
})
export class LogoutModule { }
