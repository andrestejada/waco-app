import {ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_SELECTED,PRODUCT_UPDATED,CLEAN_PRODUCT_SELECTED,LOAD_PRODUCTS} from '../types/types'
import { db } from '../firebases/firebase'
import { loadProducts } from '../helpers/LoadProducts';


export const addNewProduct =(product)=>{
    return async (dispatch,getState)=>{
        const { user:{uid} } = getState().auth;
        try {
        
            const doc = await db.collection(`${uid}`).add(product)
            dispatch(  addProduct(product,doc.id) ) 
       
        } catch (error) {
            console.log(error)
        }
    }
}

const addProduct=(product,id)=>({
    type: ADD_PRODUCT,
    payload: {
        id,
        ...product
    }
})


export const startLoadingProducts=(uid)=>{
    return async (dispatch)=>{
        const products = await loadProducts(uid)

        dispatch( LoadProducts(products) )
    }
}

export const LoadProducts = ( products ) => ({
    type: LOAD_PRODUCTS,
    payload: products
});


export const startDelete =(id)=>{
    return async (dispatch,getState)=>{
        const {uid} = getState().auth.user
        await db.doc(`${uid}/${id}`).delete()

        dispatch( deleteProduct(id) )
    }
}

const deleteProduct=(id)=>({
    type:DELETE_PRODUCT,
    payload:id
})


export const startUpdateProduct=(product)=>{
    return async (dispatch,getState)=>{

        const {uid} = getState().auth.user

        await db.doc(`${uid}/${product.id}`).update(product)

        dispatch( updateProduct(product)  )
    }
}

const updateProduct=(id)=>({
    type:PRODUCT_UPDATED,
    payload:id
})


export const productSelected=(product)=>({
    type:PRODUCT_SELECTED,
    payload:product
})

export const cleanProductSelected=()=>({
    type:CLEAN_PRODUCT_SELECTED,
})