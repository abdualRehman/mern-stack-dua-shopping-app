import React, { Component } from 'react';
import '../App.css'

class NotFound extends Component {
    render(){
        return(
            <div className="errDiv">
                <h1 className="errCode">404</h1>
                <h2>Error</h2>
                <h2>Page Not Found</h2>
            </div>
        )
    }
}
export default NotFound;