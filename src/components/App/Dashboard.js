import React from 'react'
import Nav from './layout/Nav/Nav'
import Sidebar from './layout/Sidebar/Sidebar'
import './dashboard.scss'
import Main from './layout/Main/Main'
import { startLoadingProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    dispatch( startLoadingProducts(user.uid) )
    return (
        <div className='dashboard-container' >
            <Sidebar/>

            <section>
                <Nav/>
                <Main/>
            </section>
            
            
        </div>
    )
}

export default Dashboard