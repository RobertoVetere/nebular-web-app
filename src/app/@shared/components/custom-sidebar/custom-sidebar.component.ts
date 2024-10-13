import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-custom-sidebar',
  templateUrl: './custom-sidebar.component.html',
  styleUrls: ['./custom-sidebar.component.scss']
})
export class CustomSidebarComponent {

  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard',
      home: true,
    },
    {
      title: 'Profile',
      icon: 'person-outline',
      link: '/profile',
    },
    {
      title: 'Store',
      icon: 'shopping-cart-outline',
      link: '/store',
    },
    {
      title: 'Settings',
      icon: 'settings-outline',
      link: '/settings',
    },
  ];

  sidebarState = 'collapsed';

  constructor(private sidebarService: NbSidebarService) {}

  toggleSidebar(): void {
    this.sidebarService.toggle(false, 'main-sidebar');
    this.sidebarState = this.sidebarState === 'collapsed' ? 'expanded' : 'collapsed';
  }
}
