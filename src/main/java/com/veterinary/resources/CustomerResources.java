package com.veterinary.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.veterinary.models.Customer;
import com.veterinary.services.CustomerService;

@RestController
@RequestMapping(value="/api/customers")
@CrossOrigin(origins="*")
public class CustomerResources {
	
	@Autowired
	CustomerService customerService;
	
	@GetMapping("/{id}")
	private ResponseEntity<Customer> findById(@PathVariable(value="id") long id){
		Customer customer = customerService.findById(id);
		return ResponseEntity.ok().body(customer);
	}
	
	@GetMapping("/")
	private ResponseEntity<List<Customer>> findAll(){
		List<Customer> customers = customerService.findAll();
		return ResponseEntity.ok().body(customers);
	}
	
}
