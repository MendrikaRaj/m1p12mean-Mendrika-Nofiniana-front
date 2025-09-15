import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  private apiUrl = environment.apiUrl; // Use the API URL from the environment file

  constructor(private http: HttpClient) { }

  getAllPiece(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stock/`).pipe(
      tap((response: any) => {
        console.log('Stock data fetched successfully:', response);
      })
    );
  }
}
