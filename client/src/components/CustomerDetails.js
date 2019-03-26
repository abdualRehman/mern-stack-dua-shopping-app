import React, { Component } from 'react';

class Customer extends Component{
    // constructor(props){
    //     super(props)
    // }
    componentDidMount(){
        // var data = this.props.SelectName
        return console.log( this.props.card)
    }



    render(){

        return(
            <div>
            <h1>Customer Details</h1>
            </div>
        )
    }
}
export default Customer;