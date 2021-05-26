import {TOGGLE_MENU} from '../types/types'

export const toggleMenu=(toggle)=>({
    type:TOGGLE_MENU,
    payload: toggle
})