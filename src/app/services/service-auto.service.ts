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

}
