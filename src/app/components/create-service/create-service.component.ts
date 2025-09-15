import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentServiceService } from '../../services/appointment-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceAutoService } from '../../services/service-auto.service';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.css'
})
export class CreateServiceComponent implements OnInit {
  appointment_id!: string;
  appointmentDetails: any;
  serviceData = {
    vehicule: '',
    date_debut_service: '',
    description: '',
    prix_main_oeuvre: 0,
    frais_consultation: 0,
    frais_deplacement: 0,
    status: 'en cours'
  };

  constructor(private route: ActivatedRoute, private appointment: AppointmentServiceService, private serviceAuto: ServiceAutoService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.appointment_id = params.get('appointment_id') || '';
      console.log('Received appointment ID:', this.appointment_id);
      this.loadAppointment();
    });
  }

  loadAppointment() {
    this.appointment.getAppointmentById(this.appointment_id).subscribe({
      next: (response) => {
        console.log('Appointment details:', response);
        this.appointmentDetails = response;
      },
      error: (error) => {
        console.error('Error retrieving appointment:', error);
      }
    });
  }

  createService() {
    const servicePayload = {
      rendez_vous_id: this.appointment_id,
      client_id: this.appointmentDetails?.client_id,
      ...this.serviceData
    };

    console.log('Creating service with data:', servicePayload);

    this.serviceAuto.createService(servicePayload).subscribe({
      next: (response) => {
        console.log('Service created successfully:', response);
        alert('Service créé avec succès!');
        this.router.navigate(['/list-service-manager']);
      },
      error: (error) => {
        console.error('Error creating service:', error);
        alert('Erreur lors de la création du service.');
      }
    });
  }
}
