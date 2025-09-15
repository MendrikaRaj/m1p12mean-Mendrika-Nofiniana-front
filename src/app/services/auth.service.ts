import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Import tap for side effects
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(mail: string, mdp: string): Observable<any> {
    return this.http
      .post(
        `${this.apiUrl}/user/connexion`,
        { mail, mdp },
        { withCredentials: true }
      )
      .pipe(
        tap((response: any) => {
          // Store user data in localStorage or sessionStorage
          localStorage.setItem('user', JSON.stringify(response));
        })
      );
  }
  getUserById(id: string): Observable<any> {
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid user ID format: ' + id);
    }
    return this.http.get(`${this.apiUrl}/user/getUserById/${id}`).pipe(
      tap((response: any) => {
        console.log('User retrieved successfully:', response);
      })
    );
  }
  // Method to retrieve the user from storage
  getUser(): any {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  // Method to clear the session
  logout(): void {
    localStorage.removeItem('user');
  }
}
