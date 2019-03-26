import React, { Component } from 'react';
import Product2 from './ProductAndModalStructure'
import jwt_decode from 'jwt-decode'
import axios from 'axios';


class ProductsList2 extends Component {

    constructor(props) {
      super(props)
      this.changeStatus = this.changeStatus.bind(this);
      this.addTaskCart = this.addTaskCart.bind(this);
      this.state = {products: [] , selected: [], };

    }
    componentDidMount (){
      axios.get('http://localhost:4000/products/Products')
      .then(response =>{
        this.setState({ products : response.data })
      })
      .catch(function(err){
        console.log(err)
      })
    };

    changeStatus(index){
      // index.preventDefault();

      const user = localStorage.usertoken
        if(!user){
          alert("You have to Login First")
          this.props.history.push('/login')
        }else{
          alert("product is added in Cart");

          const token = localStorage.usertoken
        const decode = jwt_decode(token)
      console.log(index.src)//
      const newCart = {
        name :index.name,
        price : index.price,
        size : index.size,
        src :index.src,
        email:decode.email,
    }
    axios.post('http://localhost:4000/users/carts', newCart)

    .then(res => console.log(res.data))
    }



      
    }
    addTaskCart=(evt)=>{
        evt.preventDefault();
      console.log("addTask is run")
        
    }

    render() {
      return (
        <div>
                <br />
                <h3 className="SubmitForm" style={{textAlign:'center'}}>Our New Products</h3>
                <br />
              <div className="container">
              <div  className='row'>
              {this.state.products.map((currentProduct,i)=>{
        return  <Product2 product={currentProduct} key={i} 
                  addTask={this.addTaskCart} clickHandler={this.changeStatus}
                    />
              })}
          </div>
          </div>
        </div>

      )
  
    }
  
  }

  export default ProductsList2