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
            LifecycleFunction 
        </div>
    );
}

export default LifecycleFunction;