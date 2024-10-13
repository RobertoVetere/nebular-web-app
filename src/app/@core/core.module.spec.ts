import { TestBed } from '@angular/core/testing';
import { CoreModule } from './core.module';
import { UserService } from './services/user.service';

describe('CoreModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
  });

  it('should provide UserService', () => {
    const userService = TestBed.inject(UserService);
    expect(userService).toBeTruthy();
  });
});
