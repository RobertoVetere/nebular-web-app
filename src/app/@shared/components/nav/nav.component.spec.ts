import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';  // Asegúrate de ajustar la ruta
import { NbThemeService, NbLayoutModule, NbButtonModule, NbThemeModule, NbActionsModule } from '@nebular/theme';  // Importa los módulos de Nebular
import { CustomButtonComponent } from '../custom-button/custom-button.component';  // Importa el CustomButtonComponent
import { ShortenPipe } from '../../pipes/shorten.pipe';  // Asegúrate de ajustar la ruta del pipe

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavComponent, 
        CustomButtonComponent, 
        ShortenPipe // Declara el pipe aquí
      ],
      imports: [
        NbThemeModule.forRoot(),  // Importa el módulo de tema de Nebular
        NbLayoutModule,  // Importa NbLayoutModule para usar nb-layout
        NbButtonModule,  // Importa NbButtonModule para usar nbButton
        NbActionsModule,  // Importa NbActionsModule para usar nb-action
      ],
      providers: [NbThemeService],  // Proporciona NbThemeService
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
