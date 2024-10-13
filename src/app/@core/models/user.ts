// core/models/user.model.ts
export class User {
  id: string;
  name: string;
  email: string;
  age?: number;  // El signo de interrogación indica que este campo es opcional
  address?: string;  // Campo opcional
  phoneNumber?: string;  // Campo opcional
  isActive: boolean;

  constructor(data: Partial<User> = {}) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.age = data.age;
    this.address = data.address;
    this.phoneNumber = data.phoneNumber;
    this.isActive = data.isActive || false;
  }
}
