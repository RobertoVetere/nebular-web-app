// core/services/user.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepository } from '../interfaces/user.repository';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUsers(): Observable<User[]> {
    return this.userRepository.getUsers();
  }

  getUserById(id: string): Observable<User> {
    return this.userRepository.getUserById(id);
  }
}
