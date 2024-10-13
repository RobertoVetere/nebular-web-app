import { Observable } from "rxjs";
import { User } from "../models/user";

// core/interfaces/user-repository.interface.ts
export interface UserRepository {
  getUsers(): Observable<User[]>;
  getUserById(id: string): Observable<User>;
}
