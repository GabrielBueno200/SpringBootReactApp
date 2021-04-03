package com.veterinary.resources;

import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.veterinary.models.Pet;
import com.veterinary.services.PetService;

@RequestMapping(value="/api/pets")
@RestController
@CrossOrigin(origins="*")
public class PetResources {

	@Autowired
	PetService petService;
	
	@PostMapping
	private ResponseEntity<List<String>> savePet(@Valid @RequestBody Pet pet, BindingResult result){
		var responseBody = petService.savePet(pet, result);
		
		return responseBody != null ? 
				ResponseEntity.ok().body(Arrays.asList("Cadastrado com sucesso!"))
				: ResponseEntity.badRequest().body(responseBody);
	}
	
	@GetMapping
	private ResponseEntity<List<Pet>> findAll(){
		return ResponseEntity.ok().body(petService.findAll());
	}
	
	@GetMapping("/owner/{cpf}")
	private ResponseEntity<String> findOwnerByCpf(@PathVariable String cpf){
		String ownerName = petService.findOwnerByCpf(cpf);
		return ResponseEntity.ok().body(ownerName);
	}
}
