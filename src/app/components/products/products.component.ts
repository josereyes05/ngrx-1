import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/prod.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Appstate } from './../../app.state';
import * as ProdActions from '../../store/prod.actions'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Products[] = []

  constructor( private productService : ProductsService, 
    private store: Store<Appstate>
    ){}

  ngOnInit() {
    this.productService.getProds().subscribe(
      (data: Products[])=> {
        this.products = data
      },
      (err) => {
        console.error('error: ', err)
      }
    )
  }

  saveProd(id: number ,title: string, price: number, description: string,
    category: string,
    image: string,
    rating:{
        rate: number,
        count: number}){
    const prod: Products = {
      id: id,
      title: title,
      price: price,
      description: description,
    category: category,
    image: image,
    rating:{
        rate: rating.rate,
        count: rating.count
    }
    }
    
    this.store.dispatch(ProdActions.addSavedProd({prod}))
  }
}
