import React, { Component } from 'react';

class LifecycleClass extends Component {

    componentDidMount(){
        console.log("Mounted");
    }

    componentWillUnmount(){
        console.log('Will unmount');
    }
    render() {
        return (
            <div>
               <h1>Use Effect Lifecycle Class</h1> 
            </div>
        );
    }
}

export default LifecycleClass;