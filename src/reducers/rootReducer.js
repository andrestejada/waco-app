import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { uiReducer } from "./uiRuducer"
import { productsReducer } from "./productsReducer"



export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    products: productsReducer
})