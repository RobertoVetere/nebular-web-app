import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbButtonModule,NbActionsModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbBadgeModule, NbInputModule, NbListModule, NbSelectModule, NbDialogModule } from '@nebular/theme';
import { NavComponent } from './components/nav/nav.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { CustomSidebarComponent } from './components/custom-sidebar/custom-sidebar.component';

@NgModule({
  declarations: [
    ShortenPipe,
    NavComponent,
    CustomButtonComponent,
    FooterComponent,
    CustomSidebarComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),  // Importa sidebar
    NbMenuModule.forRoot(),     // Importa menú
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbBadgeModule,
    NbInputModule,
    NbListModule,
    NbSelectModule,
    NbDialogModule.forRoot(),
  ],
  exports: [
    NavComponent, // Exporta el componente para usarlo en otros módulos
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbBadgeModule,
    NbInputModule,
    NbListModule,
    NbSelectModule,
    NbDialogModule,
    ShortenPipe,
    FooterComponent,
    CustomSidebarComponent,
  ]
})
export class SharedModule { }
