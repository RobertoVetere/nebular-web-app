// features/store/store-page/store-page.component.ts
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {
  products: any[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
