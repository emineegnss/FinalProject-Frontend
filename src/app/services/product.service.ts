import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44396/api/products/getall';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModule<Product>> {
    return this.httpClient.get<ListResponseModule<Product>>(this.apiUrl);
  }
}
