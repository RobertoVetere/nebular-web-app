import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StorePageComponent } from './store-page/store-page.component';
import { NbLayoutModule, NbCardModule, NbButtonModule, NbUserModule } from '@nebular/theme';



@NgModule({
  declarations: [
    StorePageComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NbLayoutModule,  
    NbCardModule,
    NbButtonModule,
    NbUserModule,
  ]
})
export class StoreModule { }
