package com.veterinary.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.veterinary.dtos.request.CustomerRequestDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="db_customer")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Customer extends Person{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long Id;

	@OneToMany(mappedBy="owner", cascade = CascadeType.ALL)
	private List<Pet> pets;
	
	@OneToMany(mappedBy="customer", cascade = CascadeType.ALL)
	private List<Appointment> appointments;

	public Customer(CustomerRequestDTO customer) {
		this.name = customer.getName();
		this.personDocument = customer.getCpf();
		this.phoneNumber = customer.getPhoneNumber();
		this.address = new Address(
				customer.getStreet(),
				customer.getNumber(),
				customer.getNeighbourhood(),
				customer.getCity()
		);
	}
	
	
}
