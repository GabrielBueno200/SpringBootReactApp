package com.veterinary.models;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.MappedSuperclass;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter @Setter
public abstract class Person {
	
	protected String name;
	
	@Column(name="CPF", unique=true)
	@JsonProperty("cpf")
	protected String personDocument;

	@Embedded
	protected Address address;
	
	@Column(name="phone_number")
	protected String phoneNumber;

	
}
