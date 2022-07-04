import React from 'react'

function Htmltotext() {
        var htmlString = "<h1><b>test</b></h1>";
        var plainString = htmlString.replace(/<[^>]+>/g, '');
        console.log(plainString);

        function toPlainText(html){
            return html.replace(/<[^>]+>/g, '');
        }
  
  return (
    <>
        <h1>HTML To Text Example</h1>
            My Text is: <div><h1><b>test</b></h1></div>
        <p>Converted To Plain Text: {toPlainText(htmlString)}</p>
    </>
  )
}

export default Htmltotext;