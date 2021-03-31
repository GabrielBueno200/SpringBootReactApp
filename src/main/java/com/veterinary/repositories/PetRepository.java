package com.veterinary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.veterinary.models.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long>{

}
