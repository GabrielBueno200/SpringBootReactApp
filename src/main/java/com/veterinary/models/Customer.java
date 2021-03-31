package com.veterinary.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.veterinary.dtos.request.CustomerRequestDTO;

import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="db_customer")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Customer extends Person implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long Id;

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
