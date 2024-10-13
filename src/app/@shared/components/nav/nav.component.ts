import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ChangeDetectorRef } from '@angular/core';  // Importar ChangeDetectorRef
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(
    private sidebarService: NbSidebarService,
  ) {}
  
  toggleSidebar(): void {
    this.sidebarService.toggle(false, 'main-sidebar');
  }

 

}
