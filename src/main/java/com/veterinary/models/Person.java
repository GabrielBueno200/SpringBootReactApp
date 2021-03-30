package com.veterinary.models;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Person {
	
	protected String name;
	
	@Column(name="CPF", unique=true)
	protected String personDocument;

	@Embedded
	protected Address address;
	
	@Column(name="phone_number")
	private String phoneNumber;

	
	//Getters and Setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPersonDocument() {
		return personDocument;
	}

	public void setPersonDocument(String personDocument) {
		this.personDocument = personDocument;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	
	
}
