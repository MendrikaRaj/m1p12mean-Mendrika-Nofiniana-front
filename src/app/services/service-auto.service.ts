import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceAutoService {
  private apiUrl = environment.apiUrl; // Replace with your actual API URL
  constructor(private http: HttpClient) { }

  createService(serviceData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/service/createService`, serviceData).pipe(
      tap((response: any) => {
        console.log('Service created successfully:', response);
      })
    );
  }
  addMecanicienToService(serviceId: string, mecanicienId: string): Observable<any> {
    if (!serviceId || !serviceId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid service ID format: ' + serviceId);
    }
    if (!mecanicienId || !mecanicienId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid mecanicien ID format: ' + mecanicienId);
    }
    return this.http.post(`${this.apiUrl}/service/${serviceId}/addMecanicien`, { mecanicienId }).pipe(
      tap((response: any) => {
        console.log('Mecanicien added to service successfully:', response);
      })
    );
  }
  getServicesByClientId(clientId: string): Observable<any> {
    if (!clientId || !clientId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid client ID format: ' + clientId);
    }
    return this.http.get(`${this.apiUrl}/service//${clientId}/clientService`).pipe(
      tap((response: any) => {
        console.log('Services retrieved successfully:', response);
      })
    );
  }
  getServiceById(serviceId: string): Observable<any> {
    if (!serviceId || !serviceId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid service ID format: ' + serviceId);
    }
    return this.http.get(`${this.apiUrl}/service/${serviceId}`).pipe(
      tap((response: any) => {
        console.log('Service retrieved successfully:', response);
      })
    );
  }
  getAllServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/service/`).pipe(
      tap((response: any) => {
        console.log('All services retrieved successfully:', response);
      })
    );
  }
  updateServiceStatus(serviceId: string, status: string): Observable<any> {
    if (!serviceId || !serviceId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid service ID format: ' + serviceId);
    }
    return this.http.post(`${this.apiUrl}/service/${serviceId}/updateStatus`, { status }).pipe(
      tap((response: any) => {
        console.log('Service status updated successfully:', response);
      })
    );
  }

}
