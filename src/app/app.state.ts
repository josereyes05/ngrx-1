import { Products } from "./models/prod.model";

export interface Appstate {
    readonly products: Products[];
    readonly savedProd: Products[]
}