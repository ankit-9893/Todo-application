import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'username';
  password: string = '';
  invalidLogin: boolean = false;

  constructor(private router: Router, private basicAuthService: BasicAuthService,
    private hardCodedAuth: HardcodedauthService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardCodedAuth.authenticate(this.username, this.password)) {
      sessionStorage.setItem('authenticateUser', this.username);
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }
    else {
      this.invalidLogin = true;
    }
    console.log('login');
    console.log('username:-  ' + this.username);
  }

  handleBasicAuthLogin() {

    console.log('into login ts');
    console.log('username - '+ this.username);
    console.log(' password - '+this.password);
    

    this.basicAuthService.helloWorldService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

  jwtAuthentiation() {

    console.log('into login ts');
    console.log('username - '+ this.username);
    console.log(' password - '+this.password);
    

    this.basicAuthService.jwtAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

}
