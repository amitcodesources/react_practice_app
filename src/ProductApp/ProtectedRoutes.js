
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
  
function ProtectedRoutes(props) {
      const {Comp} = props;
      const navigate = useNavigate();
      useEffect(() =>{
          let token = sessionStorage.getItem('user_token');
          // if(token){
          //   navigate('/dashboard');
          // } else {
          //   navigate('/login');
          // }
          if(!token){
            navigate('/login');
          }
      });
      return (
        <div>
            <Comp />
        </div>
      );
};
export default ProtectedRoutes;
