import { Component, OnInit } from '@angular/core';
import { Todo } from '../welcome/welcome.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos: Todo[]
  message: string
  // = [
  //   new Todo( 1, 'Learn to grow', false, new Date() ),
  //   new Todo( 2, 'Learn to dance', false, new Date() ),
  //   new Todo( 3, 'Learn to Angular', false, new Date() ),
  //   new Todo( 4, 'Avengers', false, new Date() )
  // ]

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('user98').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  updateTodos(id:number){
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('user98', id).subscribe(
      response => {
        console.log(response);
        this.message = 'Deleted todo with id- ' + id + ' successfully';
        this.refreshTodos();
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
