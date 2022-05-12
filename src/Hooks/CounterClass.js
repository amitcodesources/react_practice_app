import React, { Component } from 'react';

class CounterClass extends Component {

    constructor(props){
        super(props);
        this.state = { count:1 };
    }
    render() {
        return (
            <div>
                <h1>Use State </h1>
                <p>Count: {this.state.count}</p>
                <button class="btn btn-primary" onClick={() => this.setState({
                    count: this.state.count + 1
                })}>Increase by 1</button>
            </div>
        );
    }
}

export default CounterClass;