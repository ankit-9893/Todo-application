import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {

  constructor() { }

  authenticate(user, password){
    if(user === 'user98' && password === 'dummy'){
      return true;
    }
    else{
      return false;
    }
  }

  isUSerLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  loggedOut(){
    sessionStorage.removeItem('authenticateUser');
  }

}
