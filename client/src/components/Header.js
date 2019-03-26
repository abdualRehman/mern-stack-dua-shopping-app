import React, { Component } from 'react';
import '../App.css';
import {Link , withRouter} from 'react-router-dom'

class Header extends Component{
    logOut(e){
        e.preventDefault();

        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }


    render(){
      const loginRegLink = (

              <ul className="hide-on-med-and-down">

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
            <ul className="hide-on-med-and-down">

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

        return(
            <div>
             <header>

    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div className="header" id="hContent">
      <div className="container ">
        <h1 className="center" id="hsu">DUA</h1>
      </div>
    </div>

    <div className="nav navbar" id="nav">
      <nav className="nav-wrapper transparent" id="nBar">
        <div className="container">
          <a href="#mobile-menu" className="sidenav-trigger" >
                    <i className="material-icons">menu</i>
            </a>
          <ul className=" hide-on-med-and-down" id="links">
          <li><Link to="/">Home</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                    <li>{localStorage.usertoken ? userLink : loginRegLink}</li>
                    <li><Link to="/Cart"><span  className=" tooltipped  btn-floating btn indigo darken-4" data-tooltip="This is chart">
                    <i className="fa fa-shopping-cart"></i></span></Link></li>


          </ul>
            <ul className="sidenav" id="mobile-menu">
                    <li><Link to="/" className="active" >Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li>{localStorage.usertoken ? userLink : loginRegLink}</li>
                    <li><Link to="/Cart"><span  className=" tooltipped  btn-floating btn indigo darken-4" data-tooltip="This is chart">
                    <i className="fas fa-shopping-cart"></i></span></Link></li>
            </ul>
        </div>
        
      </nav>

    </div>
    <div id='title'>
      <span>
        Your Fashion Our Passion.
      </span>
      <br />
    </div>
  </header>
            </div>

        );
    }
}
export default withRouter(Header)