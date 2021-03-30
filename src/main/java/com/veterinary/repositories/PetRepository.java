package com.veterinary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinary.models.Pet;

public interface PetRepository extends JpaRepository<Pet, Long>{

}
