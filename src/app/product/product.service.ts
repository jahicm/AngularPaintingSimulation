import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl="http://"+environment.apiUrl+"/products";
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
