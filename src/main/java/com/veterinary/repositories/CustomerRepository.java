package com.veterinary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinary.models.Customer;


public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
