import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  // No se utilizará limit ni page en la solicitud a la API
  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
