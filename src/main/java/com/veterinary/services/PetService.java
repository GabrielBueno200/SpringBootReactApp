package com.veterinary.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.veterinary.models.Pet;
import com.veterinary.repositories.PetRepository;
import com.veterinary.services.exceptions.EntityNotFoundException;

@Service
public class PetService {
	
	@Autowired
	PetRepository petRepository;

	public List<String> savePet(@Valid Pet pet, BindingResult result) {
		
		if(result.hasErrors()) {
			return result.getAllErrors().stream().map(
					e -> e.getDefaultMessage()).collect(Collectors.toList());
		} else { 
			return null;
		}
	}
	
	public List<Pet> findAll(){
		return petRepository.findAll();
	}
	
	public String findOwnerByCpf(String cpf) {
		String ownerName = petRepository.findOwnerByCpf(cpf);
		
		if(ownerName == null) {
			throw new EntityNotFoundException("Não encontrado cliente com o CPF " + cpf);
		}
			
		return ownerName;
	}
}

