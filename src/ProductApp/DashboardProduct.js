import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import HeaderNavComp from './HeaderNavComp';


export default class DashboardProduct extends Component {

    componentDidMount(){
        let isAuth = localStorage.getItem('user_token')
        if(isAuth & isAuth !== 'undefined') {
            this.props.navigate('/dashboard');   
        }
    }
    
    render() {
        return (
            <>
                <HeaderNavComp />
                <div className='container'>
                    <Outlet />
                </div>
            </>
        );
    }
}

