import React from 'react'
import './sidebarItem.scss'

const SidebarItem = ({name,icon,submenu,isToggle}) => {
    return (
        <li className='sidebar-item' >
           <div className={icon} ></div>

           {
               (!isToggle)
                ? ''
                : <> <p>{name}</p> <div className={ submenu ? null:'fas fa-chevron-down'} ></div> </>
           }
           
           
        </li>
    )
}

export default SidebarItem
