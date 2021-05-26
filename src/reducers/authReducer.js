import {LOGIN_SUCCESS,START_LOADING,LOGOUT} from '../types/types' 

const initialState={
    isAuth:false,
    loading:false,
    user:{
        uid:null
    }
}


export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                isAuth: true,
                user:{uid:action.payload.uid}
            }
        case LOGOUT:
            return{
                ...state,
                isAuth:action.payload
            }
        case START_LOADING:
            return{
            ...state,
            loading:true,
        }
        default:
            return state;
    }
}