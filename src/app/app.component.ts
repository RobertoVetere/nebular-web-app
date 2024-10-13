import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  sidebarState = 'collapsed';
  title = 'prueba-nebular-tres';
  lastSidebarState = '';  // Para rastrear el último estado del sidebar

  constructor(private sidebarService: NbSidebarService, private cdRef: ChangeDetectorRef) {}

  toggleSidebar(): void {
    this.sidebarService.toggle(false, 'main-sidebar');
    this.sidebarState = this.sidebarState === 'collapsed' ? 'expanded' : 'collapsed';
  }

  ngAfterViewChecked() {
    // Compara el estado actual con el último estado conocido
    if (this.sidebarState !== this.lastSidebarState) {
      this.lastSidebarState = this.sidebarState;  // Actualiza el último estado conocido
      this.cdRef.detectChanges();  // Forzamos la detección de cambios
    }
  }
}
