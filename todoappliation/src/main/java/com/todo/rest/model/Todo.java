package com.todo.rest.model;

import java.util.Date;

public class Todo {

	private Long id;

	private String username;

	private String description;

	private Date targerDate;

	private boolean done;

	protected Todo() {}
	
	public Todo(long id, String username, String description, Date targerDate, boolean status) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targerDate = targerDate;
		this.done = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargerDate() {
		return targerDate;
	}

	public void setTargerDate(Date targerDate) {
		this.targerDate = targerDate;
	}

	public boolean isStatus() {
		return done;
	}

	public void setStatus(boolean status) {
		this.done = status;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
}
