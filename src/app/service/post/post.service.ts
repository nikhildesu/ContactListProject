import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Post } from './post'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG} from '../appconfig/appconfig.service';
import { IAppConfig} from '../appconfig/Iapp.config';

@Injectable()
export class PostService {

  constructor(private httpService: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig ) { }

  getPosts()
  {
    return this.httpService.get<Post[]>(this.config.apiEndPoint + 'posts');
     
  }

  addPost(post: Post)
  {
    return this.httpService.post(this.config.apiEndPoint + 'posts',post);
  }

}
