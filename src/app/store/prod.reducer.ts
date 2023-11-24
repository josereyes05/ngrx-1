import { UPDATE, createReducer, on } from "@ngrx/store"
import { addSavedProd, delSavedProd } from "./prod.actions"
import { Products } from "../models/prod.model"

const SavedProdLocalStorage = localStorage.getItem('savedProd')//aqui pedimos la info del localstorage

const SavedProdInitstate : Products[] = SavedProdLocalStorage ? JSON.parse(SavedProdLocalStorage) : []
//aqui arribita decimos que si hay algo en el localstorage lo muestre,  si no aparezca vacio

export const SavedProdReducer = createReducer(
    SavedProdInitstate,
    on(addSavedProd, (state, { prod }) => {
        const updatedState = [...state, prod] //aqui guardamos al estado anterior y al nuevo
        localStorage.setItem('savedProd', JSON.stringify(updatedState))
        
        return updatedState
    }),
    
    on(delSavedProd, (state, { id }) => {
        const del = state.filter(prod => prod.id !== id)
        
        localStorage.setItem('savedProd',JSON.stringify(del))

        return del
    })
)