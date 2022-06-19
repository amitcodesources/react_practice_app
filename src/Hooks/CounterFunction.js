import React from 'react';


function CounterFunction() {
        const [count, setCount] = React.useState(1);
        return (
            <div>
                <h1>Use State Counter Function</h1>
                <p>Count: {count}</p>
                <button className="btn btn-primary" onClick={ () => 
                    setCount(count+1)
                }>Increase by 1</button>
            </div>
        );
}


export default CounterFunction;