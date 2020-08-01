import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../service/hardcodedauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private hardCodedAuth: HardcodedauthService) { }

  ngOnInit(): void {
    this.loggedIn = this.hardCodedAuth.isUSerLoggedIn();
  }

}
