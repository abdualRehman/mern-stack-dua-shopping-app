import React, { Component } from 'react';
import {Link , withRouter} from 'react-router-dom'


class Navbar extends Component {

    logOut(e){
        e.preventDefault();

        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }



    render() {
        const loginRegLink = (
            <ul className="nav-wrapper">

                <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="nav-wrapper">

                <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    User
                </Link>
                </li>
                <li className="nav-item">
                <a href="!#" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </a>
                </li>
            </ul>
        )




      return (
        <nav className="nav-wrapper">
            <div className="container">
                {/* <span className="brand-logo">Store</span> */}
                <a href="#mobile-menu" className="sidenav-trigger" >
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>          
                        <li>{localStorage.usertoken ? userLink : loginRegLink}</li>       
                      </ul>

               

                {/* <ul className="sidenav grey lighten-2" id="mobile-menu">
                <li><Link to="/" className="active" >Home</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="signup.html">SignUp</a></li>
                    <li><Link to="/Chart"><span  className=" tooltipped  btn-floating btn indigo darken-4" data-tooltip="This is chart">
                    <i className="fas fa-shopping-cart"></i></span></Link></li>
                </ul> */}
            </div>
        </nav>
        
      );
    }
  }
  
  export default withRouter(Navbar)