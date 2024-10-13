// data/repositories/user-api.repository.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRepository } from '../../@core/interfaces/user.repository';
import { User } from '../../@core/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserApiRepository implements UserRepository {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
