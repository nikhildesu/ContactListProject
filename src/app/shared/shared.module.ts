import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatDialogModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ContactFilterPipe} from '../custompipes/contact-filter.pipe'
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    RouterModule
  ],
  declarations: [ContactFilterPipe],
  exports: [FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    RouterModule,
    ContactFilterPipe
  ]
})
export class SharedModule { }
