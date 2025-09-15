import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceUserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createMecanicien(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/inscription`, userData);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/getAllUsers`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/getUserById/${id}`);
  }
  getUserByRole(role: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/getAllUserByRole/${role}`);
  }
}
