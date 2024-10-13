import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos los servicios y modelos relevantes
import { UserService } from './services/user.service';

// Evita la importación múltiple del módulo
function throwIfAlreadyLoaded(parentModule: CoreModule) {
  if (parentModule) {
    throw new Error('CoreModule ya ha sido cargado. Solo debe importarse en AppModule.');
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService  // Proveedor del servicio de usuario
  ],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule);
  }
}
