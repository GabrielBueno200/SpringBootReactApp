package com.veterinary.repositories;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.jpa.repository.JpaRepository;
import com.veterinary.models.Person;

@NoRepositoryBean
public interface PersonRepository extends JpaRepository<Person, Long>{

}
