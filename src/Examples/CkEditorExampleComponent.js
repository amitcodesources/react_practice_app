import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class CkEditorExampleComponent extends Component {
    constructor(props) {
        super(props);
         
        this.state = {
            content: 'content',
        }
    }

    onChange = (evt, editor) => {
        var newContent = editor.getData();
        this.setState({
          content: newContent
        })
        console.log(newContent)
      }

  render() {
    // console.log(this.state.content);
    return (
      <>
            <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    // onReady={ editor => {
                    //     // You can store the "editor" and use when it is needed.
                    //     console.log( 'Editor is ready to use!', editor );
                    // } }
                    // onChange={ ( event, editor ) =>  {
                    //     const data = editor.getData();
                    //     console.log(data);
                    // } }
                    onChange={this.onChange}
                />
      </>
    )
  }
}

export default CkEditorExampleComponent;