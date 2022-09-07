import React, { useState, useMemo } from 'react'

const Hooks_useMemo = () => {
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(10);

    const multicounts = useMemo( ()=> multicount(), [count]);
    
    function multicount(){
        console.log('Re-render occured');
        return count * 5;
    }
    

  return (
    <div>
        <h1>Hooks_useMemo Demo</h1>
        <h2>Count: {count}</h2>
        <h2>Item: {item}</h2>
        {/* <h2>{multicount()}</h2> */}
        <h2>{multicounts}</h2>
        <button onClick={()=>setCount(count+1)}>Count Up</button>
        <button onClick={()=>setItem(item*10)}>Item Up</button>
    </div>
  )
}

export default Hooks_useMemo;