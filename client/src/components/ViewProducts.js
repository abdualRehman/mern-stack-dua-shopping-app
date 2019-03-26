import React, { Component } from 'react';
import axios from 'axios';
import AdminPanalProducts from './AdminPanal.Products'

class ViewProducts extends Component {

    constructor(props) {
        super(props)       
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
      componentDidUpdate(){
        axios.get('http://localhost:4000/products/Products')
        .then(response =>{
          this.setState({ products : response.data })
        })
        .catch(function(err){
          console.log(err)
        })
      }

    render(){
        return(
            <div>
                <h2 className="SubmitForm" style={{textAlign:"center"}}>Products</h2>
                {/* <div  className='row'> */}
              {this.state.products.map((currentProduct,i)=>{
        return  <AdminPanalProducts product={currentProduct} key={i} 
                  // addTask={this.addTaskCart} clickHandler={this.changeStatus}
                    />
              })}
          {/* </div> */}
            </div>
        );
    }
}
export default ViewProducts;