import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../welcome/welcome.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private route: ActivatedRoute, private router: Router,
    private todoService: TodoDataService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retriveTodo('user98', this.id).subscribe(
        response => {
          this.todo = response
        }
      );
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('user98', this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos'])
        }
      );
    }
    else {
      console.log(this.todo);
      this.todoService.updateTodo('user98', this.id, this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos'])
        }
      );
    }
  }
}
