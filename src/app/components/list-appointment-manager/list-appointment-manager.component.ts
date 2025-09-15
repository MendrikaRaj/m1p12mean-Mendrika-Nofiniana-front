import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentServiceService } from '../../services/appointment-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-appointment-manager',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './list-appointment-manager.component.html',
  styleUrl: './list-appointment-manager.component.css'
})
export class ListAppointmentManagerComponent {
  appointments: any[] = []; // Array to store appointments
  constructor(private appointmentService: AppointmentServiceService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.loadAppointments(); // Load appointments when the component initializes
  }
  loadAppointments() {
    this.appointmentService.getAllAppointments().subscribe({
      next: (response) => {
        console.log('Backend response:', response); // Debugging log
        this.appointments = response.map((appointment: any) => {
          this.authService.getUserById(appointment.client_id).subscribe({
            next: (user) => {
              appointment.clientDetails = user; // Attach user details to the appointment
            },
            error: (error) => {
              console.error(`Error retrieving user with ID ${appointment.client_id}:`, error);
              appointment.clientDetails = null; // Set to null if there's an error
            }
          });
          return appointment;
        }) || [];
      },
      error: (error) => {
        console.error('Error retrieving appointments:', error);
        this.appointments = []; // Reset to an empty array on error
      }
    });
  }
  updateStatusAppointment(appointmentId: string, status: string) {
    this.appointmentService.updateAppointmentStatus(appointmentId, status).subscribe({
      next: (response) => {
        console.log('Appointment status updated successfully:', response);
        alert('Statut du rendez-vous mis à jour avec succès!');
        this.loadAppointments(); // Reload appointments after updating status
      },
      error: (error) => {
        console.error('Error updating appointment status:', error);
        // Handle error (e.g., show an error message)
      }
    });

  }
  goToCreateService(appointment_id: string) {
    this.router.navigate(['/create-service', appointment_id]);
  }
}

