import React from 'react'
import {useLocation} from 'react-router-dom';

const Details = (props) => {
    const location = useLocation();  
    const { username, email, city, phone } = location.state;
    console.log(location.state)
  return (
    <div>
        <div className="form-details">
        <div>
          <strong>Username:</strong> {username}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div>
      </div>
    </div>
  )
}

export default Details