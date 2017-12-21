import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { PostService} from '../service/post/post.service';
import {Post} from '../service/post/post';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  post: Post = new Post();
  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  addPost(){
    this.postService.addPost(this.post).subscribe((data) => console.log(data),
    (err) => console.log(err));
    this.post=new Post();
  }

}
