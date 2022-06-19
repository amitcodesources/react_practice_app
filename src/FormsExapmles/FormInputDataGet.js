import React, { useRef } from 'react'

export default function FormInputDataGet() {

    const usernamelInput = useRef(null);
    const emailInput = useRef(null);

    const handleSubmit = (event)=> {
        event.preventDefault();

        // 1st Way
        // const data = new FormData(event.target);
        // console.log(data.get('username')); 

        // 2nd Way
        // const uname = event.target.username;
        // console.log(uname.value);
        // const uemail = event.target.elements.email;
        // console.log(uemail.value);

        // 3rd Way
        // const uname = event.target[0];
        // console.log(uname.value);
        // const uemail = event.target.elements[1];
        // console.log(uemail.value);

        // 4th Way 
        console.log(usernamelInput?.current.value);
        console.log(emailInput?.current.value);

        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
    };


    return (
        <form className="d-grid m-auto" style={{ maxWidth: 300 + 'px' }} onSubmit={handleSubmit}>
            <label htmlFor="username">Enter username</label>
            <input id="username" name="username" type="text" ref={usernamelInput} />

            <label htmlFor="email">Enter your email</label>
            <input id="email" name="email" type="text" ref={emailInput} />

            <label htmlFor="birthdate">Enter your birth date</label>
            <input id="birthdate" name="birthdate" type="text" />

            <button type='submit'>Send data!</button>
        </form>
    )
}

