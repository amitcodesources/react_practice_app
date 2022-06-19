import React, { Component } from 'react'

export default class CKEditor extends Component {
constructor(props) {
    super(props);
    
    }

    componentDidMount() {
        let configuration = {
          toolbar: "Basic"
        };
        CKEDITOR.replace("editor", configuration);
        CKEDITOR.instances.editor.on('change', function () {
          let data = CKEDITOR.instances.editor.getData();
          this.props.onChange(data);
        }.bind(this));
      }
      
  render() {
    return (
        <textarea name="editor" cols="100" rows="6" defaultValue={this.props.value}></textarea>

    )
  }
}
