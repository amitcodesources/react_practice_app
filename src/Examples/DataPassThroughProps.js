// import React, { Component } from 'react'

//  class DataPassThroughProps extends Component {
//     constructor(props){
//         super(props);
//     }
//   render() {
//     return (
//         <>
//             <h3>Data Pass Through Props Componennt</h3>
//             <h2> My Name is : {this.props.data.name}</h2>
//             <h2> My Age is : {this.props.data.age}</h2>
//         </>
//     )
//   }
// }




import React from 'react'

const DataPassThroughProps = (props) => {
    return (
        <>
            <h3>Data Pass Through Props Componennt</h3>
            <h2> My Name is : {props.data.name}</h2>
            <h2> My Age is : {props.data.age}</h2>
        </>
    )
  }




export default DataPassThroughProps;






