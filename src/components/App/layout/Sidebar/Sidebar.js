import React from 'react'
import { useSelector } from 'react-redux'
import SidebarItem from './sibar-item/SidebarItem'
import './sidebar.scss'
import logo from '../../../../assets/logo.png'

const Sidebar = () => {
    const {isToggle} = useSelector(state => state.ui)

    return (
        <aside className={ !isToggle && 'toggleCollapse' } >
            <div>
                <div className='d-flex' >
                    <div className='main-logo'> <img src={logo} alt='logo' /> </div>
                    <h2>Waco</h2>
                </div>
                <hr/>
                <SidebarItem
                    name='Pogramacion'
                    icon='fas fa-map'
                    isToggle={isToggle}
                />
                <SidebarItem
                    name='Gestión de operaciones'
                    icon='fas fa-list-ul'
                    isToggle={isToggle}
                />
                <SidebarItem
                    name='Perfiles'
                    icon='fas fa-sliders-h'
                    isToggle={isToggle}
                />
                <SidebarItem
                    name='Roles'
                    icon='fas fa-registered'
                    isToggle={isToggle}
                />
                <SidebarItem
                    name='Usuarios'
                    icon='fas fa-underline'
                    isToggle={isToggle}
                />
                <SidebarItem
                    name='Reportes'
                    icon='fas fa-sticky-note'
                    isToggle={isToggle}
                />
            </div>

            
        </aside>
    )
}

export default Sidebar
