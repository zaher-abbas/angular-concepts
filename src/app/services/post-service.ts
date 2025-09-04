import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../Interface/Post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient,) {
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseURL}/posts`,
      post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/posts/${id}`);
  }
}
