import React, { Component } from 'react'

const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        render() {
            return <OriginalComponent name="This is a  Higher Order Component" />
        }
    }
    return NewComponent
}
export default EnhancedComponent;
