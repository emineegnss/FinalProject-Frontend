import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModule } from '../models/listResponseModel';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:44396/api/categories/getall';
  constructor(private httpClient:HttpClient) { }
  getCategories(): Observable<ListResponseModule<Category>>{
    return this.httpClient.get<ListResponseModule<Category>>(this.apiUrl)
  }
}
