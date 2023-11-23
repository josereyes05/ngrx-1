import { createReducer, on } from "@ngrx/store"
import { addSavedProd } from "./prod.actions"
import { Products } from "../models/prod.model"

const SavedProdLocalStorage = localStorage.getItem('savedProd')
const SavedProdInitstate : Products[] = SavedProdLocalStorage ? JSON.parse(SavedProdLocalStorage) : []

export const SavedProdReducer = createReducer(
    SavedProdInitstate,
    on(addSavedProd, (state, { prod }) => {
        const updatedState = [...state, prod]
        localStorage.setItem('savedProd', JSON.stringify(updatedState))

        return updatedState
    })
)