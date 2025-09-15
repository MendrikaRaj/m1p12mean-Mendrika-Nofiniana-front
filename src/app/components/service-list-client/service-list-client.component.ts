import { Router } from '@angular/router';
import { ServiceAutoService } from './../../services/service-auto.service';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-list-client',
  imports: [CommonModule],
  templateUrl: './service-list-client.component.html',
  styleUrl: './service-list-client.component.css',
})
export class ServiceListClientComponent {
  service_Auto_Clients: any[] = []; // Array to store appointments
  constructor(
    private ServiceAutoService: ServiceAutoService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    this.loadServicesClient(); // Load appointments when the component initializes
  }
  loadServicesClient() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
    this.ServiceAutoService.getServicesByClientId(userId).subscribe({
      next: (response) => {
      console.log('Backend response:', response); // Debugging log
      this.service_Auto_Clients = response || [];
      },
      error: (error) => {
      console.error('Error retrieving services:', error);
      this.service_Auto_Clients = []; // Reset to an empty array on error
      },
    });
  }
}
