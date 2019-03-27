

import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductsList from './components/ProductList'
import Cart from './components/chart'
import Header from './components/Header'
import Content from './components/content';
import Footer from './components/Footer';
import Form from './components/form';
import ProductsList2 from './components/Products'
import CreateProduct from './components/CreateProduct'
import AdminPanel from './components/AdminPanel'
// import Customer from './components/CustomerDetails'
import EditProduct from './components/EditProducts'
import NotFound from './components/404'
import Orders from './components/ViewOrders'


import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'



import Upload from './components/UploadImage'
// site wali line

// import { Provider } from "react-redux";
// import store from "./store";

// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

// import jwt_decode from "jwt-decode";
// import setAuthToken from "../src/components/untils/setAuthToken";

// import { setCurrentUser, logoutUser } from "../src/components/actions/authActions";



// auth lines


// import Navbar from './components/Navebar'
// import Landing from './components/Landing'
// import Login from './components/Login'
// import Register from './components/Register'
// import Profile from './components/Profile'







class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/Products" component={ProductsList2} />
            <Route path="/Cart" component={Cart} />
            <Route  path="/form" component={Orders} /> {}
            <Route exact path="/" component={Content} />
            <Route path="/login" component={Login} /> 
            <Route path="/register" component={Register} />

            <Route   path="/profile" component={Profile}  />

            <Route path="/ProductList" component={ProductsList} />
            <Route path="/create" component={CreateProduct} />
            <Route path="/admin" component={AdminPanel} />
            <Route path="/orderDetails" component={Form} />
            <Route path="/edit/:id" component={EditProduct} />
            <Route path="/upload" component={Upload} />
            <Route path="*" component={NotFound} />

          </Switch>
          <Footer />







            {/* <Navbar />
            
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />  
              <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch> */}










              {/* <Navbar /> */}
              {/* <Header />
              <Route exact path="/" component={Landing} />
                <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/404" component={NotFound} />
                </div> */}


        </div>
      </Router>
     
    );
  }
}

export default App;

