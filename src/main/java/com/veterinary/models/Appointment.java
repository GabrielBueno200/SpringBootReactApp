package com.veterinary.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="db_appointment")
public class Appointment {
	

	@EmbeddedId
	private Long id;
	
	@Column(name="scheduled_date")
	@JsonProperty("scheduled_date")
	private Date date;

	@ManyToOne
    @MapsId("customer_id")
    @JoinColumn(name = "customer_id")
    private Customer customer;
	
	@ManyToOne
    @MapsId("vaterinary_id")
    @JoinColumn(name = "veterinary_id")
    private Veterinary veterinary;


	@ManyToOne
    @MapsId("pet_id")
    @JoinColumn(name = "pet_id")
    private Pet pet;
	
}
