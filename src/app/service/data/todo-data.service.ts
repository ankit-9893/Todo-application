import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/welcome/welcome.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user98' + ':' + 'dummy') });
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`, {headers,  responseType: 'json' })
  }

  deleteTodo(username: string, id: number){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user98' + ':' + 'dummy') });
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`, {headers,  responseType: 'json' })
  }

  retriveTodo(username: string, id: number){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user98' + ':' + 'dummy') });
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`, {headers,  responseType: 'json' })
  }

  updateTodo(username: string, id: number, todo: Todo){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user98' + ':' + 'dummy') });
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo, {headers,  responseType: 'json' }); 
  }

  createTodo(username: string, todo: Todo){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user98' + ':' + 'dummy') });
    return this.http.post(`${API_URL}/users/${username}/todos`, todo, {headers,  responseType: 'json' }); 
  }
}
