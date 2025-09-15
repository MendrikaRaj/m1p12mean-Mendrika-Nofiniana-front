import { Component } from '@angular/core';
import { AppointmentServiceService } from '../../services/appointment-service.service'; // Import the service
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StockServiceService } from '../../services/stockPiece/stock-service.service';

@Component({
  selector: 'app-create-service-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './create-service-appointment.component.html',
  styleUrls: ['./create-service-appointment.component.css']
})
export class CreateServiceAppointmentComponent {
  serviceData = {
    client_id: '',
    vehicule: '',
    date_debut_service: '',
    date_fin_service: '',
    description: '',
    prix_main_oeuvre: 0,
    frais_consultation: 0,
    frais_deplacement: 0,
    mecanicien_id: [],
    pieces: [ // Add the pieces array
      {
        piece_id: '',
        date_ajout: new Date(),
        status: '',
        quantite: 0
      }
    ],
    status: '',
  };
  allPieces: any[] = []; // Array to hold all pieces for autocomplete

  constructor(private appointmentService: AppointmentServiceService, private stockPieceService: StockServiceService) { } // Inject the service
  ngOnInit(): void {
    this.stockPieceService.getAllPiece().subscribe({
      next: (pieces) => {
        this.allPieces = pieces; // Store the pieces for autocomplete
      },
      error: (error) => {
        console.error('Error fetching pieces:', error);
      }
    });
  }
  createServiceAppointment(): void {
    this.appointmentService.createAppointment(this.serviceData).subscribe({
      next: (response) => {
        console.log('Service created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating service:', error);
      }
    });
  }
}
