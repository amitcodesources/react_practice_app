import React from 'react'

export default function Hooks_useState() {
  
    // const [Language, setLanguage] = React.useState('React Js');
    // const [Year, setYear] = React.useState(2);

    // function changeLanguage(){
    //     setLanguage('React Hooks');
    // }

    // function addYear(){
    //     setYear(prev => prev + 1);
    // }

    // return (
    //     <div>
    //      <h1>useState Hooks Example</h1>
    //      <h1 onClick={changeLanguage}>I am learning {Language} since {Year} years.</h1>
    //      <button onClick={addYear}>Add Years</button>
    // </div>


    const [state, setState] = React.useState({
        Language:'Raect JS',
        Year: 2
    })

    function changeLanguage(){
        setState({...state, Language:'React Hooks'});
    }

    function addYear(){
        setState(prev => {
            return{
                ...state,
                Year: prev.Year + 1
            }
        });
    }
  
    return (
        <div>
            <h1>useState Hooks Example</h1>
            <h1 onClick={changeLanguage}>I am learning {state.Language} since {state.Year} years.</h1>
            <button onClick={addYear}>Add Years</button>
    </div>
  )
}
