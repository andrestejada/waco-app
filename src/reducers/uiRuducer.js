import {  TOGGLE_MENU } from '../types/types'

const initialState ={
    isToggle:false
}

export const uiReducer =(state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_MENU:
            return{
                isToggle: action.payload
            }
          
        default:
            return state;
    }
}