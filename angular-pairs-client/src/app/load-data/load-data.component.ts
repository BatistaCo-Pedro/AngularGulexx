import { ProductsService } from './../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../services/product';



@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent {
  public products: Array<Product> = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe((product) =>{
      console.log('products req finished:', product);
      this.products = product;
    });
   }

}
