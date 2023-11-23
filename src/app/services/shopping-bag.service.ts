import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Appstate } from '../app.state';
import { Products } from '../models/prod.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBagService {
  prod: Products[] = []

  constructor(
    private store: Store<Appstate>
  ) { }

  ngOnInit(){
    this.store.pipe(select('savedProd')).subscribe((prod: Products[]) => {
      this.prod = prod
    })
  }
}