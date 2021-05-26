import { auth } from "../firebases/firebase"
import { LOGIN_SUCCESS ,LOGOUT} from "../types/types"


export const authWithEmailAndPassword=(email,password)=>{
    return async(dispatch)=>{
         try {
            const {user} = await auth.signInWithEmailAndPassword(email,password) 

            if(user.uid){
                dispatch( loginSuccess(user) ) 
            }

         } catch (error) {
             
         }
    }
}

export const loginSuccess =(user)=>({
    type:LOGIN_SUCCESS,
    payload:user
})


export const startRegisterWithEmailAndPassword=(email,password)=>{
    return async(dispatch)=>{
        const {user} = await auth.createUserWithEmailAndPassword(email,password)
        
        if(user.uid){
            dispatch( loginSuccess(user) ) 
        }
        dispatch( loginSuccess )
    }
}


export const startLogout=()=>{
    return async (dispatch)=>{
        await auth.signOut();
        dispatch(logOut())
    }
}
export const logOut=()=>({
    type:LOGOUT,
    payload:false
})