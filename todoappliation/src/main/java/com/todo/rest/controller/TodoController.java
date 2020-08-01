package com.todo.rest.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todo.rest.model.Todo;
import com.todo.rest.service.TodoHardcodedService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

	@Autowired
	private TodoHardcodedService todoHardCodedSevice;

	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoHardCodedSevice.findAll();
	}

	@GetMapping("users/{username}/todos/{id}")
	public Todo getTodoById(@PathVariable String username, @PathVariable("id") long id) {
		return todoHardCodedSevice.findById(id);
	}

	@PostMapping("users/{username}/todos")
	public ResponseEntity<Todo> createTodo(@PathVariable String username, 
			@RequestBody Todo todo ) {
		
		Todo updatedTodo = todoHardCodedSevice.saveTodo(todo);
		return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
		}

	@PutMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> updateTodoById(@PathVariable String username, @PathVariable("id") long id,
			@RequestBody Todo todo) {

		Todo updatedTodo = todoHardCodedSevice.saveTodo(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(updatedTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}

	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodoById(@PathVariable String username, @PathVariable("id") long id) {

		Todo todo = todoHardCodedSevice.deleteById(id);
		if (todo == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.noContent().build();
	}

}
