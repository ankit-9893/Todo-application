import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targerDate: Date
  ) { }
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string = '';
  message: string;
  private helloWorldBean: HelloWorldBean;
  constructor(private route: ActivatedRoute, private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log('into welcome message');

    this.welcomeService.helloWorldService().subscribe(
      response => { this.handleResponse(response) },

    );
  }

  handleResponse(response) {
    this.message = response.message;
    // console.log('from');
    this.helloWorldBean = response;
    console.log(this.helloWorldBean.message);
    console.log(response);
    console.log(response.message);
  }
}
