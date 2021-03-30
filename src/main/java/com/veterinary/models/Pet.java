package com.veterinary.models;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="db_pet")
public class Pet implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long Id;
	
	@NotBlank(message="Pet name cannot be null")
	private String name;
	
	@NotBlank(message="Pet breed cannot be null")
	private String breed;
	
	@NotBlank(message="Pet age cannot be null")
	private Double age;
	
	@NotBlank(message="Pet type cannot be null")
	@Enumerated(value = EnumType.STRING)
	private AnimalType type;
	
	@NotBlank(message="Pet must to have an owner ")
	@OneToOne(cascade = CascadeType.ALL)
	@Column(name="owner_id")
	@JoinColumn(name="Id", nullable=false)
	private Customer owner;
	
	
	//Getters and Setters

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public Double getAge() {
		return age;
	}

	public void setAge(Double age) {
		this.age = age;
	}

	public AnimalType getType() {
		return type;
	}

	public void setType(AnimalType type) {
		this.type = type;
	}

	public Customer getOwner() {
		return owner;
	}

	public void setOwner(Customer owner) {
		this.owner = owner;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
}
