import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomButtonComponent } from './custom-button.component';  // Asegúrate de ajustar la ruta
import { NbButtonModule, NbThemeModule } from '@nebular/theme';  // Importa NbButtonModule

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomButtonComponent],
      imports: [
        NbButtonModule,  // Importa el módulo de Nebular Button
        NbThemeModule.forRoot(),  // Configura el tema
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the correct status', () => {
    component.status = 'success';
    fixture.detectChanges();

    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList).toContain('status-success'); // Verifica que se aplica la clase del status
  });

  it('should apply the correct size', () => {
    component.size = 'large';
    fixture.detectChanges();

    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList).toContain('size-large'); // Verifica que se aplica la clase del tamaño
  });

  it('should disable the button when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBe(true); // Verifica que el botón está deshabilitado
  });

  it('should emit onClick event when clicked and not disabled', () => {
    spyOn(component.onClick, 'emit'); // Espía el método 'emit'
    component.disabled = false;

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(component.onClick.emit).toHaveBeenCalled(); // Verifica que se emitió el evento
  });

  it('should not emit onClick event when button is disabled', () => {
    spyOn(component.onClick, 'emit');
    component.disabled = true;

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(component.onClick.emit).not.toHaveBeenCalled(); // Verifica que no se emitió el evento
  });
});
