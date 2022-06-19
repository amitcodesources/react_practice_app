import React from 'react';

function LifecycleFunction(props) {

    React.useEffect(() =>{
        console.log("Mounted");
        return () =>{
            console.log("Will Unmount");
        };
    }, []);

    return (
        <div>
            <h1>Use Effect Lifecycle Function</h1>  
        </div>
    );
}

export default LifecycleFunction;