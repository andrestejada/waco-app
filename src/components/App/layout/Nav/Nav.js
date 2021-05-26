import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../../../actions/authAction'
import { toggleMenu } from '../../../../actions/uiActions'
import './Nav.scss'

const Nav = () => {
const dispatch = useDispatch()

const handleLogout =()=>{
    dispatch( startLogout() )
}

const [toggle, setToggle] = useState(false)

const handleToggle =()=>{
    setToggle(!toggle)
    dispatch( toggleMenu(!toggle) )
}
    return (
        <nav>
                <div 
                    className='fas fa-bars'
                    onClick={ handleToggle }
                ></div>

                

                <div 
                    className="fas fa-sign-in-alt"
                    onClick={handleLogout}
                ></div>

                  
        </nav>
    )
}

export default Nav
