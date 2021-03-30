package com.veterinary.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="db_veterinary")
public class Veterinary extends Person implements Serializable {


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long Id;
	
	@Column(unique=true)
	private String CRV;
	
	private String speciality;
	
	
	//Getters and Setters
	public long getId() {
		return Id;
	}

	public String getCRV() {
		return CRV;
	}

	public String getSpeciality() {
		return speciality;
	}
	
	

}
