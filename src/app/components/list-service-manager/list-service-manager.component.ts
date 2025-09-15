import { Router } from '@angular/router';
import { ServiceAutoService } from './../../services/service-auto.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-service-manager',
  imports: [CommonModule],
  templateUrl: './list-service-manager.component.html',
  styleUrl: './list-service-manager.component.css'
})
export class ListServiceManagerComponent {
services: any[] = []; // Array to store appointments
  constructor(
    private serviceAutoService: ServiceAutoService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    this.loadServices(); // Load appointments when the component initializes
  }
  loadServices() {
    this.serviceAutoService.getAllServices().subscribe({
      next: (response) => {
      console.log('Backend response:', response); // Debugging log
      this.services = response || [];
      },
      error: (error) => {
      console.error('Error retrieving services:', error);
      this.services = []; // Reset to an empty array on error
      },
    });
  }
  updateStatus(serviceId: string, newStatus: string) {
    this.serviceAutoService.updateServiceStatus(serviceId, newStatus).subscribe({
      next: (response) => {
        console.log('Service status updated:', response);
        this.loadServices(); // Reload services to reflect the updated status
      },
      error: (error) => {
        console.error('Error updating service status:', error);
      },
    });
  }
}
