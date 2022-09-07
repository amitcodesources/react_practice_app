import React, { useState } from 'react'

export default function HOCCounter() {
  return (
    <div className='d-flex justify-content-evenly'>
        <HOCRed cmp={Counter} />
        <HOCGreen cmp={Counter} />
        <HOCBlue cmp={Counter} />
    </div>
  )
}

function HOCRed(props){
    return <h2 style={{color:'red', width:100+'px', padding:10+'px', border:2+'px solid red'}}><props.cmp/></h2>
}

function HOCGreen(props){
    return <h2 style={{color:'green', width:100+'px', padding:10+'px', border:2+'px solid green'}}><props.cmp/></h2>
}

function HOCBlue(props){
    return <h2 style={{color:'blue', width:100+'px', padding:10+'px', border:2+'px solid blue'}}><props.cmp/></h2>
}

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Up</button>
        </div>
    ) 
}
