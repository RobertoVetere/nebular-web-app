# PruebaHome

Este proyecto es una prueba de aplicación Angular que implementa la Clean Architecture, utilizando librerías como Nebular, Tailwind CSS, y Eva Icons para crear un diseño sencillo, responsive, y modular. La estructura sigue un patrón basado en Core, Feature, y Shared, lo que facilita la escalabilidad y el mantenimiento de la aplicación.

## Agradecimientos
Api https://fakestoreapi.com/products

## Tecnologías Utilizadas

### 1. **Nebular**

Nebular es una librería UI para Angular que proporciona una amplia variedad de componentes, como menús, tarjetas, barras laterales (sidebars), botones, y más.

#### Componentes Utilizados:
- **Nebular Layout**: Usamos `nb-layout` para estructurar la página principal de la aplicación.
  
  ```html
  <nb-layout>
    <nb-layout-header>
      <app-nav></app-nav>
    </nb-layout-header>

    <nb-sidebar
      [(state)]="sidebarState"
      tag="main-sidebar"
      class="menu-sidebar"
      responsive
    >
      <app-custom-sidebar></app-custom-sidebar>
    </nb-sidebar>

    <nb-layout-column>
      <router-outlet></router-outlet>
    </nb-layout-column>

    <nb-layout-footer>
      <app-footer></app-footer>
    </nb-layout-footer>
  </nb-layout>
