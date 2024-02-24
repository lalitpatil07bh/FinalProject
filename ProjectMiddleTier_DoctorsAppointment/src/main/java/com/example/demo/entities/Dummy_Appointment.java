package com.example.demo.entities;

import java.sql.Date;
import java.sql.Time;
import java.util.Objects;

public class Dummy_Appointment {

	Date date;
	int doctor_id,patient_id;
	Time slot;
	String status;
	
	public Dummy_Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Dummy_Appointment(Date date, int doctor_id, int patient_id, String status, Time slot) {
		super();
		this.date = date;
		this.doctor_id = doctor_id;
		this.patient_id = patient_id;
		this.status = status;
		this.slot = slot;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}

	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}

	public Time getSlot() {
		return slot;
	}

	public void setSlot(Time slot) {
		this.slot = slot;
	}

	@Override
	public int hashCode() {
		return Objects.hash(date, doctor_id, patient_id, slot, status);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Dummy_Appointment other = (Dummy_Appointment) obj;
		return Objects.equals(date, other.date) && doctor_id == other.doctor_id && patient_id == other.patient_id
				&& Objects.equals(slot, other.slot) && Objects.equals(status, other.status);
	}
	
	
	
	
	
}
