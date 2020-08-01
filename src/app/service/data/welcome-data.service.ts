import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) { }
}
// ng generate service welcome-data
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private helloWorldBean: HelloWorldBean;

  private basicAuthHeaderString;

  constructor(private http: HttpClient) { }

  helloWorldService() {
    // this.basicAuthHeaderString = this.createBasicAuthHttpHeader();

    // let username = 'user98';
    // let password = 'dummy';

    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    

    return this.http.get<HelloWorldBean>(`${API_URL}/hello` );
  }

  // createBasicAuthHttpHeader() {
  //   let username = 'user98';
  //   let password = 'dummy';
  //   return 'Basic' + window.btoa(username + password);
  // }




}
