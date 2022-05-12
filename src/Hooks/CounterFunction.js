import React from 'react';


function CounterFunction() {
        const [count, setCount] = React.useState(1);
        return (
            <div>
                <p>Count: {count}</p>
                <button class="btn btn-primary" onClick={ () => 
                    setCount(count+1)
                }>Increase by 1</button>
            </div>
        );
}


export default CounterFunction;