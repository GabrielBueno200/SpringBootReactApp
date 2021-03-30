package com.veterinary.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.veterinary.models.Customer;
import com.veterinary.repositories.CustomerRepository;
import com.veterinary.services.exceptions.EntityNotFoundException;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository customerRepository;
	
	public List<Customer> findAll(){
		return customerRepository.findAll();
	}
	
	public Customer findById(long id) {
		return customerRepository.findById(id).orElseThrow(
				() -> new EntityNotFoundException("Not found entity with id " + id));
	}
}
