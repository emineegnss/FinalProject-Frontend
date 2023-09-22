import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44396/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModule<Product>> {
    let newPath=this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number): Observable<ListResponseModule<Product>> {
    let newPath=this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }
  add(product:Product):Observable<ResponseModel>{
    
    return this.httpClient.post<ResponseModel>("https://localhost:44396/api/Products/add",product);
  }
}
