import React, { Component } from 'react';
import '../App.css';
import CreateProduct from '../components/CreateProduct'
import ViewProducts from '../components/ViewProducts'
import Orders from './ViewOrders'



class AdminPanel extends Component {

    render(){
        return(
                <div className="container">
                <h1 className="SubmitForm" style={{textAlign:'center'}}>Welcome To Admin Panal</h1>
           
                <div className="row">
                <div className="col s12 m6">
                <CreateProduct />
                <br/><br/>
                </div>
                <div className="col s12 m6">
                <ViewProducts />               
                </div>
                </div>
                <Orders />
            </div>
        );
    }
}
export default AdminPanel;