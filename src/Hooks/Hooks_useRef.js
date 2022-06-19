import React from 'react'

export default function Hooks_useRef() {

    const inputRef = React.useRef(null);

    function handleClearinput(){
        inputRef.current.value = '';
        inputRef.current.focus();
    }

  return (
    <div>
        <h1>useRef Hooks Example</h1>

        <form>
            <input type="text" ref={inputRef}/> <br/>
            <button type="button" onClick={handleClearinput}>Clear Data</button>
        </form>
    </div>
  )
}
