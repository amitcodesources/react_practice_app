import React from 'react'

export default function Hooks_useEffect() {

    const [color, setColor] =  React.useState('skyblue');

    React.useEffect(()=>{
        document.body.style.background = color;
        document.body.style.color = 'red';
    }, [color]);

    function changeColor(){
        setColor('green');
    }

    const [user, setUser] = React.useState(null);

    React.useEffect(()=>{
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => setUser
            (data.results[0]))
    }, []);

  return (
    <div>
        <h1>useEffect Hooks Example</h1>
        <button onClick={changeColor}>Change Color</button>
        <br/><br/>
        Current Users: <pre>
            { JSON.stringify(user, null, 2) }
        </pre>
    </div>
  )
}
