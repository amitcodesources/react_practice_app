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
               LifecycleClass 
            </div>
        );
    }
}

export default LifecycleClass;