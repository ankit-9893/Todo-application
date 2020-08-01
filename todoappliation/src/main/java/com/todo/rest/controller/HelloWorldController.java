package com.todo.rest.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.rest.model.HelloWorldBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

	@RequestMapping("hello")
	@GetMapping(produces = "application/json")
	//@CrossOrigin(origins = "http://localhost:4200")
	public HelloWorldBean getHello() {
		HelloWorldBean hello = new HelloWorldBean();
		hello.setMessage("hello-world");
//		throw new RuntimeException("exception in thred 1");
		return hello;
	}
}
