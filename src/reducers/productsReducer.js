import {ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_SELECTED,PRODUCT_UPDATED,CLEAN_PRODUCT_SELECTED,LOAD_PRODUCTS} from '../types/types'


const initialState={
    products: [
      
    ],
    productSelected:null
}

export const productsReducer =(state= initialState ,action)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload ]
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter( user=> user.id !== action.payload )
            }
        case PRODUCT_SELECTED:
            return{
                ...state,
                productSelected: state.products.find( user=> user.id === action.payload )
            }
        case PRODUCT_UPDATED:
            return{
                ...state,
                products: state.products.map( 
                    user=> (user.id=== action.payload.id) 
                            ? action.payload
                            : user
                    ),
                
                productSelected:null
            }
        case CLEAN_PRODUCT_SELECTED:
            return{
                ...state,
                productSelected:null
            }
        case LOAD_PRODUCTS:
            return{
                ...state,
                products: [...action.payload ]
            }
        
        default:
            return state;
    }
}