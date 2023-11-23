import { createAction, props } from "@ngrx/store";
import { Products } from "../models/prod.model";

export const addSavedProd = createAction("[Saved Product Component] Add product", props<{ prod: Products }>());