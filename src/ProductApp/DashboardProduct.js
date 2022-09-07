import React, { useEffect } from 'react'
import HeaderNavComp from './HeaderNavComp';
import { Outlet } from 'react-router-dom';
const DashboardProduct = () => {

    useEffect(() =>{
        let isAuth = localStorage.getItem('userToken')
        if(isAuth & isAuth !== 'undefined') {
            this.props.navigate('/dashboard');   
        }
  });

    return (
        <>
            <HeaderNavComp />
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default DashboardProduct
