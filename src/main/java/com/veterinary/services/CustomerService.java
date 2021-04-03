package com.veterinary.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.veterinary.dtos.request.CustomerRequestDTO;
import com.veterinary.models.Customer;
import com.veterinary.repositories.CustomerRepository;
import com.veterinary.services.exceptions.EntityNotFoundException;
import com.veterinary.services.exceptions.InvalidDataException;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository customerRepository;
	
	public List<Customer> findAll(){
		return customerRepository.findAll();
	}
	
	public Customer findById(long id) {
		return customerRepository.findById(id).orElseThrow(
				() -> new EntityNotFoundException("Não encontrado cliente com o id " + id));
	}
	
	public List<Customer> findByCpf(String cpf) {
		List<Customer> customers = customerRepository.findByPersonDocumentStartsWith(cpf);
		
		if (customers.size() == 0)
			throw new EntityNotFoundException("Não encontrado cliente com o CPF " + cpf);
		
		return customers;
	}
	
	
	public Customer save(CustomerRequestDTO customer, BindingResult result) {
		if(result.hasErrors()) {
			throw new InvalidDataException(result.getFieldErrors());
		}
		
		Customer newCustomer = new Customer(customer);
		
		customerRepository.save(newCustomer);
		
		return newCustomer;
		
	}
	
	public Customer updateUser(Long id, CustomerRequestDTO customerDTO, BindingResult result) {
		if(result.hasErrors()) {
			throw new InvalidDataException(result.getFieldErrors());
		}
		
		Customer updatedCustomer = this.findById(id);
		
		Customer FormData = new Customer(customerDTO);
		
		updatedCustomer.setName(FormData.getName());
		updatedCustomer.setPersonDocument(FormData.getPersonDocument());
		updatedCustomer.setPhoneNumber(FormData.getPhoneNumber());
		updatedCustomer.setAddress(FormData.getAddress());
		
		customerRepository.save(updatedCustomer);
		
		return updatedCustomer;
		
	}
	
	public void deleteById(Long id) {
		customerRepository.deleteById(id);
	}
	
}
