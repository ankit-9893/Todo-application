import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloWorldBean } from './data/welcome-data.service';
import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  authenticate(user, password) {
    if (user === 'user98' && password === 'dummy') {
      return true;
    }
    else {
      return false;
    }
  }

  isUSerLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }


  jwtAuthService(username: string, password: string) {
    console.log('into JWT basic auth service');
    
    return this.http.post<any>(`${API_URL}/authenticate`, { username, password })
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticateUser', username);
            console.log(data);
            sessionStorage.setItem('token', `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }

  helloWorldService(username: string, password: string) {
    console.log('into hello world service');
    
    let basicAuthHeaderString = 'Basic ' + btoa(username + ':' + password)
    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    console.log(basicAuthHeaderString);
    
    return this.http.get<HelloWorldBean>(`${API_URL}/hello`, { headers, responseType: 'json' })
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticateUser', username);
            console.log(basicAuthHeaderString);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  loggedOut() {
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }


  // basicAuthService(username, password) {

  //   let basicAuthHeaderString = 'Basic' + window.btoa(username + password);

  //   const headers = new HttpHeaders()
  //     .set('Authorization', this.basicAuthHeaderString)
  //     .set('Accept', 'application/json')
  //     .set('Content-Type', 'application/json');

  //   return this.http.get<AuthenticationBean>(`${API_URL}/hello`, { headers }).pipe(
  //     map(
  //       data => {
  //         sessionStorage.setItem('authenticateUser', username);
  //       }
  //     )
  //   );
  // }

  // createBasicAuthHttpHeader() {
  //   let username = 'user98';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic' + window.btoa(username + password);
  // }

}

export class AuthenticationBean {

  constructor(public message: string) { }
}