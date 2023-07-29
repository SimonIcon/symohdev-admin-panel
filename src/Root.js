import React from 'react'
import AdminContext from './context/AdminContext'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


const Root = () => {
    return (
        <AdminContext>
            <Navbar />
            <Outlet />
        </AdminContext>
    )
}

export default Root