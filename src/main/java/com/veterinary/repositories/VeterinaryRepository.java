package com.veterinary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinary.models.Veterinary;

public interface VeterinaryRepository extends JpaRepository<Veterinary, Long>{

}
