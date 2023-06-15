import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  public blogRefreshed: EventEmitter<number> = new EventEmitter<number>();
  postDeleted = new EventEmitter<number>();
  getAll() {
    return this.http.get(this.url + '/api/posts');
  }
  getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
  }

  getAllFromCurrentUser(){
    //console.log("posts from user: "+this.currentUser.userId);
    return this.http.get(this.url + '/api/postsFromUser/' + this.currentUser.userId);
  }

  addPost(postData: any) {
    console.log(postData);
    return this.http.post(this.url + '/api/addPost', postData);
  }
  editPost(postData: any, id: string) {
    console.log(postData);
    return this.http.put(this.url + '/api/editPost/' + id, postData);
  }

  removePost(id: number) {
    return this.http.delete(this.url + '/api/removePost/' + id).pipe(
      tap(() => {
        this.postDeleted.emit(id);
        this.blogRefreshed.emit();
      })
    );
  }

  get currentUser() {
    const token = this.getToken();
    //console.log(token);
    if (!token) {
      return null;
    }

    return new JwtHelperService().decodeToken(token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
