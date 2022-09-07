import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import DashboardProduct from '../ProductApp/DashboardProduct';

export default function Hooks_useNavigate() {

    // let navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        // navigate('/about' , {replace: true});
        <Navigate to={<DashboardProduct/>}/>
      }

  return (
    <div>
        <button onClick={handleClick}>go home</button>
    </div>
  )
}
