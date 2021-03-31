package com.veterinary.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class CustomerRequestDTO {
	

	private String name;
	
	private String street;
	
	private String number;
	
	private String neighbourhood;
	
	private String city;
	
	private String cpf;
	
	private String phoneNumber;
	
	

}
