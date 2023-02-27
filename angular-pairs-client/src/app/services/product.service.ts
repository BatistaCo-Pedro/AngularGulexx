import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({ providedIn: 'root'})
export class ProductsService {
  constructor(private http: HttpClient){}

  public getProducts(){
    const endpoint =
      'https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd';
    return this.http.get<Array<Product>>(endpoint);
  }
}
