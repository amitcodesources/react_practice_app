// import React from 'react'
// import {Navigate, Outlet} from 'react-router-dom'
// import { withRouter } from 'react-router-dom';
// const useAuth=()=>{
//     const user_token = sessionStorage.getItem('user_token');
//     if(user_token){
//       return true
//     } else {
//       return false
//     }
//   }

//   const  ProtectedRoutes=(props) =>{
// 	  const auth=useAuth()
// 	  return auth?<Outlet/>: <Navigate to="/login"/>
// 	}

// export default ProtectedRoutes


import React from "react";
import { Route, Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      sessionStorage.getItem('user_token') ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoutes;
