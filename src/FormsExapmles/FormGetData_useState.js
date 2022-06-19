import React, { useState } from 'react'

const FormGetData_useState = () => {

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phonenumber: "",
      });
    
    const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(contactInfo);
        // console.log(contactInfo.name, contactInfo.email, contactInfo.phonenumber);
        setContactInfo({ name: "", email: "", phonenumber: "" });
      };
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input type="text" name="name" placeholder="Name" value={contactInfo.name} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" value={contactInfo.email} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="phonenumber" placeholder="Phone Number" value={contactInfo.phonenumber} onChange={handleChange} />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  )
}

export default FormGetData_useState