package com.veterinary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.veterinary.models.Veterinary;

@Repository
public interface VeterinaryRepository extends JpaRepository<Veterinary, Long>{

}
