import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page Not Found Component</h1>
                <NavLink to='/'>Go to Home</NavLink>
            </div>
        );
    }
}

export default PageNotFound;