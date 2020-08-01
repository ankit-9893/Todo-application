package com.todo.rest.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

import com.todo.rest.model.Todo;

@Component
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int counter = 0;

	static {
		todos.add(new Todo(++counter, "user1", "learn to grow", new Date(), false));
		todos.add(new Todo(++counter, "user2", "learn about spring boot", new Date(), false));
		todos.add(new Todo(++counter, "user3", "learn about microservices", new Date(), false));
		todos.add(new Todo(++counter, "user4", "learn about angular", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo saveTodo(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++counter);
			todos.add(todo);
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		System.out.println("todo"+todo.getId());
		if (todos.remove(todo))
			return todo;

		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}

		}
		return null;
	}
	
	
	
}
