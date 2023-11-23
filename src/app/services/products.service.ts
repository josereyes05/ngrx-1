import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from '../models/prod.model';

@Injectable({
  providedIn: 'root'

})
export class ProductsService {
  private urlprod = 'https://fakestoreapi.com/products/'

  constructor(private http: HttpClient) { }

  getProds(): Observable<Products[]> {
    return this.http.get<Products[]>(this.urlprod)
  }
}
