import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {
  allProducts: any[] = [];  // Aquí se almacenan todos los productos
  products: any[] = [];     // Aquí se almacenan los productos paginados
  limit: number = 6;        // Límite de productos por página
  page: number = 1;         // Página actual

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  // Cargar todos los productos una vez
  loadAllProducts(): void {
    this.storeService.getAllProducts().subscribe(data => {
      this.allProducts = data;
      this.paginateProducts();  // Muestra la primera página
    });
  }

  // Paginación local: Selecciona los productos para la página actual
  paginateProducts(): void {
    const startIndex = (this.page - 1) * this.limit;
    const endIndex = this.page * this.limit;
    this.products = [...this.products, ...this.allProducts.slice(startIndex, endIndex)];
  }

  // Método para cargar más productos al avanzar de página
  loadNextPage(): void {
    this.page++;
    this.paginateProducts();
  }
}
