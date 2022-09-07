import React, { Component } from 'react'
import Flower from './Flower';

class PassFuncToChildComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            skinColor : 'green'
        }
    }

    updateColor = () => {
        this.setState({ skinColor : 'Red'});
    }
    
  render() {
    return (
      <Flower skinColor={this.state.skinColor} updateSkinColor={this.updateColor} />
    )
  }
}

export default PassFuncToChildComp;