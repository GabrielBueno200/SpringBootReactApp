package com.veterinary.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinary.models.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
