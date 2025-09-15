import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  private apiUrl = environment.apiUrl; // Use the API URL from the environment file

  constructor(private http: HttpClient) { }

  createAppointment(appointmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/appointment/create`, appointmentData).pipe(
      tap((response: any) => {
        console.log('Appointment created successfully:', response);
      })
    );
  }
  getAppointmentsByClientId(clientId: string): Observable<any> {
    if (!clientId || !clientId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid client ID format' + clientId);
    }
    return this.http.get(`${this.apiUrl}/appointment/getAppointment/${clientId}`).pipe(
      tap((response: any) => {
        console.log('Appointments retrieved successfully:', response);
      })
    );
  }
  getAppointmentById(appointmentId: string): Observable<any> {
    if (!appointmentId || !appointmentId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid appointment ID format: ' + appointmentId);
    }
    return this.http.get(`${this.apiUrl}/appointment/getAppointmentById/${appointmentId}`).pipe(
      tap((response: any) => {
        console.log('Appointment retrieved successfully:', response);
      })
    );
  }
  getAllAppointments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/appointment/`).pipe(
      tap((response: any) => {
        console.log('All appointments retrieved successfully:', response);
      })
    );
  }
  updateAppointmentStatus(appointmentId: string, status: string): Observable<any> {
    if (!appointmentId || !appointmentId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid appointment ID format: ' + appointmentId);
    }
    return this.http.post(`${this.apiUrl}/appointment/updateStatusAppointment/${appointmentId}`, { status }).pipe(
      tap((response: any) => {
        console.log('Appointment status updated successfully:', response);
      })
    );
  }
}
