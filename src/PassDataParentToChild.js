import React from 'react'

function PassDataParentToChild(my_props) {
    console.log("props", my_props);
  return (


    <div>
        Hello           {my_props.name}             {my_props.email}
    </div>
        
  )
}


export default PassDataParentToChild;



