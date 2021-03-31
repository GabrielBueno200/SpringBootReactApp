package com.veterinary.services.exceptions;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidDataException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	
	private List<FieldError> errors;
	
	public InvalidDataException(String message) {
		super(message);
	}
	
	public InvalidDataException(List<FieldError> errors) {
		super();
		this.errors = errors;
	}

	public List<FieldError> getErrors() {
		return errors;
	}

	public void setErrors(List<FieldError> errors) {
		this.errors = errors;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
