import { createAction, props } from '@ngrx/store';
import { Products } from '../models/prod.model';

export const addSavedProd = createAction(
  '[Saved Product Component] Add product',
  props<{ prod: Products }>()
);

export const delSavedProd = createAction(
  '[[Saved Product Component] delete product]',
  props<{ id: number }>()
);
