import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AppointmentServiceService } from '../../services/appointment-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent implements OnInit {
  client_id: string = '';
  date: string = '';
  details: string = '';
  appointments: any[] = []; // Array to store appointments

  constructor(private authService: AuthService, private appointmentService: AppointmentServiceService, private router: Router) { }


  ngOnInit(): void {
    const user = this.authService.getUser(); // Retrieve the user from AuthService
    if (user) {
      this.client_id = user._id; // Set the user's name or a default value
      console.log('Client ID:', user._id);
      this.loadAppointments(); // Load appointments when the component initializes
    }
  }

  createAppointment() {
    const user = this.authService.getUser();
    if (user) {
      this.client_id = user._id; // Set the user's ID
    } else {
      alert('User not logged in. Please log in to create an appointment.');
      return; // Exit the function if no user is logged in
    }

    const appointmentData = {
      client_id: this.client_id,
      date: this.date,
      details: this.details,
    };

    this.appointmentService.createAppointment(appointmentData).subscribe({
      next: (response) => {
        console.log('Appointment created successfully:', response);
        alert('Rendez-vous créé avec succès!');
        this.loadAppointments();
      },
      error: (error) => {
        console.error('Error creating appointment:', error);
        // Handle error (e.g., show an error message)
      }
    });
  }
  loadAppointments() {
    this.appointmentService.getAppointmentsByClientId(this.client_id).subscribe({
      next: (response) => {
        console.log('Backend response:', response); // Debugging log
        this.appointments = response || []; // Extract the array or default to an empty array
      },
      error: (error) => {
        console.error('Error retrieving appointments:', error);
        this.appointments = []; // Reset to an empty array on error
      }
    });
  }
}
