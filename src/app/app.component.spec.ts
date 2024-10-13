import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './@shared/shared.module';  // Importa tu SharedModule donde declaras app-nav
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbThemeService, NbLayoutModule, NbButtonModule, NbThemeModule } from '@nebular/theme'; // Importa los módulos de Nebular

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        SharedModule,  // Importa el módulo que contiene app-nav y otros componentes compartidos
        NbThemeModule.forRoot(),  // Importa el módulo del tema de Nebular
        NbLayoutModule,  // Importa NbLayoutModule para usar nb-layout
        NbButtonModule,  // Importa NbButtonModule para usar nbButton
      ],
      declarations: [
        AppComponent
      ],
      providers: [NbThemeService],  // Proporciona NbThemeService
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Para permitir los componentes personalizados de Nebular
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'prueba-nebular-tres'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('prueba-nebular-tres');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('nebular');
  });
});
