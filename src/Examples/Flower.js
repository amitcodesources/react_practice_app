import React from 'react'

const Flower = (props) => {
  return (
    <section>
	      <div style={{'color': props.skinColor}}>
	      	I AM THE COLOR OF Flower
	      </div>
	      <button onClick={props.updateSkinColor}>
	      	Update Colour
	      </button>
      </section>
  )
}

export default Flower