import { ChangeDetectorRef, Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private themeService: NbThemeService,private cd: ChangeDetectorRef){}
 // Cambiar al tema oscuro y forzar la detección de cambios
  switchToDarkTheme() {
    this.themeService.changeTheme('dark');
    this.cd.detectChanges();  // Forzar la detección de cambios
  }

  // Cambiar al tema claro y forzar la detección de cambios
  switchToLightTheme() {
    this.themeService.changeTheme('default');
    this.cd.detectChanges();  // Forzar la detección de cambios
  }
}
