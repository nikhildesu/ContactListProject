import { Component, OnInit } from '@angular/core';
import { PostService} from '../../service/post/post.service'
import {Post} from '../../service/post/post'
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
     this.postService.getPosts().subscribe((data) =>
      this.posts = data,
       (err) => console.log(err.message));
    

} }
