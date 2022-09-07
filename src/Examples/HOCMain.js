import React, { Component } from 'react'
import EnhancedComponent from './HOC';

 class HOCMain extends Component {
  render() {
    return <h1>{this.props.name}</h1>
  }
}

export default EnhancedComponent(HOCMain);
