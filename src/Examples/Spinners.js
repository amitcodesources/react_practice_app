import React, { Component } from 'react'
import { BounceLoader } from 'react-spinners';

export default class Spinners extends Component {
    constructor(){
        super();
        this.state = {
            loadstart:true
        }
    }
  render() {
    let loadstart = this.state;
    return (
      <div> 
            <span className='position-absolute top-50 start-50 translate-middle'>
            <BounceLoader size={100} color={'#4417fa'} loading={loadstart} speedMultiplier={3}></BounceLoader>
            </span>
            <br/>

      </div>
    )
  }
}
