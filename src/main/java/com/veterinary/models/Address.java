package com.veterinary.models;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Address {

	private String street;
	
	private String number;
	
	private String neighbourhood;
	
	private String city;


}
