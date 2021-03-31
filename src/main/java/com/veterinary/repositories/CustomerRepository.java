package com.veterinary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.veterinary.models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
