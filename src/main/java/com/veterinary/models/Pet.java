package com.veterinary.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="db_pet")
@NoArgsConstructor
@Getter @Setter
public class Pet{

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
	private PetConstants type;
	
	@NotBlank(message="Pet must to have an owner ")
	@ManyToOne
	@JoinColumn(name="ownerId")
	private Customer owner;
	
	@OneToMany(mappedBy="pet", cascade = CascadeType.ALL)
	private List<Appointment> appointments;
	
}
