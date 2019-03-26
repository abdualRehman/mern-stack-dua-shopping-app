import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import jwt_decode from 'jwt-decode'


class Form extends Component{
        constructor(props){
            super(props);
            this.onChangeFname = this.onChangeFname.bind(this);
            this.onChangeLname = this.onChangeLname.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangeAddress = this.onChangeAddress.bind(this);
            this.onChangeMessage= this.onChangeMessage.bind(this);
            this.onSubmit = this.onSubmit.bind(this) 

            this.state = {
                fname:'',
                lname:'',
                email:'',
                address:'',
                message:'',
                carts:[],
            }
        }
        componentDidMount(){
            const token = localStorage.usertoken
            const decode = jwt_decode(token)
            const data =  {email: decode.email}
            // console.log(email);
            axios.post('http://localhost:4000/users/viewCarts',data)
            .then(response =>{
                var item = response.data.data[0].carts;
              this.setState({
                  carts : item
              })
            //   localStorage.setItem('orderItem',JSON.stringify(item))
              
            })
            .catch(function(err){
             console.log(err)
            })





        }

        onChangeFname(e){
            this.setState({
                fname:e.target.value
            });
        }
        onChangeLname(e){
            this.setState({
                lname:e.target.value
            });
        }
        onChangeEmail(e){
            this.setState({
                email:e.target.value
            });
        }
        onChangeAddress(e){
            this.setState({
                address:e.target.value
            });
        }
        onChangeMessage(e){
            this.setState({
                message:e.target.value
            })
        }

        onSubmit(e){
            e.preventDefault();
            console.log('Order Submitted:');
            console.log(`Customer Fname:${this.state.fname}`)
            console.log(`Customer Lname:${this.state.lname}`)
            console.log(`Customer Email:${this.state.email}`)
            console.log(`Customer Address:${this.state.address}`)
            console.log(`Customer Message:${this.state.message}`)
            console.log(this.state.carts);



            const token = localStorage.usertoken
            const decode = jwt_decode(token)
            const data = {
                carts:this.state.carts,
                email:decode.email,
            }
            axios.post('http://localhost:4000/users/orderSuccess',data)
            .then(res => console.log(res.data))

            const newOrder = {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                address: this.state.address,
                message:this.state.message,
                carts: this.state.carts
            }

            axios.post('http://localhost:4000/orders/addOrder', newOrder)
            .then(res => console.log(res.data))

            this.setState({
                fname:'',
                lname:'',
                email:'',
                address:'',
                message:'',
                carts:[],
            })

            alert("Your Order is Submitted!")
            this.props.history.push('/products')
        
        
        
        
        }


    render(){
        return(
            <div>
                <div className="container">
                <br/><br/>            
                    <h1 className="SubmitForm">Please Fill Form</h1><br/>

                   <form onSubmit={this.onSubmit}>
                   <div className="input-field col s6">
                    <input id="first_name"
                            value={this.state.fname}
                            onChange={this.onChangeFname}
                            type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                    </div>

                    <div className="input-field col s6">
                    <input id="last_name"
                    value={this.state.lname}
                    onChange={this.onChangeLname} type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                    </div>

                    <div className="input-field col s6">
                    <input id="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail} type="text" className="validate" />
                    <label htmlFor="email">Enter Email Address</label>
                    </div>

                    <div className="input-field col s6">
                    <input id="shippingAddress"
                    value={this.state.address}
                    onChange={this.onChangeAddress} type="text" className="validate" />
                    <label htmlFor="shippingAddress">Enter Shipping Address</label>
                    </div>

                    <div className="input-field col s6">
                    <textarea id="textarea1"
                    onChange={this.onChangeMessage}
                    value={this.state.message}
                     className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Message</label>
                    </div>

        








                     <div style={{width:500}} className="form-group">

                     <br/><input type="submit" value="Order Now" className="btn btn-primary" /><br/><br/>

                    </div>

                   </form>
      

                </div>
            </div>
        )
    }
}
export default Form;