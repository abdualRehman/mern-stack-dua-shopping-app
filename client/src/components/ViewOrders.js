import React, { Component } from 'react';
import axios from 'axios';
import AdminPanelOreders from './AdminPanelOrders'



class Orders extends Component{
    constructor(){
        super()
        this.state = {
            orders:[]
        }
    }



    componentDidMount(){
        axios.get('http://localhost:4000/orders/Orders')
        .then(response =>{
          this.setState({ orders : response.data })
        //   console.log(this.state.orders[2])
        })
        .catch(function(err){
          console.log(err)
        })
    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/orders/Orders')
        .then(response =>{
          this.setState({ orders : response.data })
        //   console.log(this.state.orders[7].carts[1])
        })
        .catch(function(err){
          console.log(err)
        })
    }



    render(){

        return(
            <div>
            <h1 className="SubmitForm">Orders Details</h1>
            {this.state.orders.map((currentOrder,index)=>{
            return <AdminPanelOreders order={currentOrder}
                    key={index} />
            })}
            </div>
        )
    }
}
export default Orders;