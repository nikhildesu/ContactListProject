import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
 import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PostComponent,PostListComponent],
  exports: [PostComponent,PostListComponent]
})
export class PostModule { }
