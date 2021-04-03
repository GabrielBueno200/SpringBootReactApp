package com.veterinary.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="db_veterinary")
@NoArgsConstructor
@Getter @Setter
public class Veterinary extends Person {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long Id;
	
	@Column(unique=true)
	private String CRV;
	
	private String speciality;
	
	@OneToMany(mappedBy="veterinary", cascade = CascadeType.ALL)
	private List<Appointment> appointments;
	

}
