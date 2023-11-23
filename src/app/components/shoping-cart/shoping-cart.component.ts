import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Appstate } from 'src/app/app.state';
import { Products } from 'src/app/models/prod.model';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent {
  prod: Products[] = []

  constructor(
    private store: Store<Appstate>
  ) {}

  ngOnInit(){
    this.store.pipe(select('savedProd')).subscribe((prod: Products[]) => {
      this.prod = prod
    })
  }
}
