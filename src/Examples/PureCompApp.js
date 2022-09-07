import React, { PureComponent } from 'react'

export default class PureCompApp extends PureComponent {
  constructor(){
    super();
    this.state = {
      count:1
    }
  }
  render() {
    console.warn('Re-rendering done');
    return (
      <div>
            <h1>Pure Component App</h1>
            <h3>Count : {this.state.count}</h3>
            <button onClick={()=>this.setState({count: this.state.count+1})}>Count Up</button>
            {/* <button onClick={()=>this.setState({count: this.state.count})}>Count Up</button> */}
      </div>
    )
  }
}
