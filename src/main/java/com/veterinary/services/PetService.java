package com.veterinary.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.veterinary.models.Pet;

@Service
public class PetService {

	public List<String> savePet(@Valid Pet pet, BindingResult result) {
		
		if(result.hasErrors())
			return result.getAllErrors().stream().map(
					e -> e.getDefaultMessage()).collect(Collectors.toList());
		else 
			return null;
	}
	
}

