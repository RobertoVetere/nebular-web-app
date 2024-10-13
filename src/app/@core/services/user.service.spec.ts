import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { UserApiRepository } from '../../@data/repositories/user.api.repository';
import { User } from '../../@core/models/user';

describe('UserApiRepository', () => {
  let service: UserApiRepository;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserApiRepository,
        provideHttpClient(),           // Proporciona el cliente HTTP
        provideHttpClientTesting()     // Proporciona el entorno de pruebas para HTTP
      ]
    });

    service = TestBed.inject(UserApiRepository);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all users', () => {
    const mockUsers: User[] = [
      { id: '1', name: 'John', email: 'john@example.com', isActive: true },
      { id: '2', name: 'Jane', email: 'jane@example.com', isActive: true }
    ];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('https://api.example.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should retrieve a user by ID', () => {
    const mockUser: User = { id: '1', name: 'John', email: 'john@example.com', isActive: true };

    service.getUserById('1').subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne('https://api.example.com/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });
});
