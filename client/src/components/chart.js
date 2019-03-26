import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom';


class Cart extends Component{

    constructor(props){
        super(props)
        this.total = this.total.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);
        // this.componentWillUpdate = this.componentWillUpdate.bind(this);
        this.state = {
            cards:[]
        }
    }
    componentDidMount(){


        const user = localStorage.usertoken;
        if(!user){
            alert("Cart is Empity!!!!");
            this.props.history.push('/products')
        }
        else{
            const token = localStorage.usertoken
            const decode = jwt_decode(token)
            const data =  {email: decode.email}
            // console.log(email);
            axios.post('http://localhost:4000/users/viewCarts',data)
            .then(response =>{
            this.setState({ cards : response.data.data[0].carts})
            //   console.log(this.state.cards[0]);
            })
            .catch(function(err){
             console.log(err)
            })
        }
    }



    componentDidUpdate(){
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        const data =  {email: decode.email}
        // console.log(email);
        axios.post('http://localhost:4000/users/viewCarts',data)
        .then(response =>{
          this.setState({ cards : response.data.data[0].carts })
        //   console.log(this.state.cards[0]);
        })
        .catch(function(err){
          console.log(err)
        })
    }



    handleDelete(index){
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        // const data =  {email: decode.email}
        console.log(index);
        const dataDelete = {
            name:index.name,
            price:index.price,
            size:index.size,
            email:decode.email,
        }
        axios.post('http://localhost:4000/users/deleteOne', dataDelete)
        .then(res => console.log(res.data))
        

    }

    total(){
        var count = this.state.cards;
                var total = 0;
                for(var i=0; i<count.length;i++){
                    
                    var price = this.state.cards[i].price
                    total = total + price; 
                    
                }
                return total
    }
    render(){
        return(
            
            <div>
                <br/><br/>
            <div className="row">
            
            <div className="container" >

                <div className="col s10 m8" style={{margin:'auto'}}>
                 <h5>Quantity: {this.state.cards.length}</h5>
                {this.state.cards.map((card,index)=>{
                return( <ul className="collection"  key={index}>
                <li className="collection-item avatar">
                <img src={'images/'+card.src} alt="" className="circle" />
                  <span className="title">{card.name}</span>
                  <p>Price: {card.price} Rs.</p> 
                  <p>Size: {card.size} </p> 
                  <div 
                  onClick={(e)=>{
                      this.handleDelete(card)
                  }}
                  className='secondary-content' style={{float:'right'}} >  <i className="fas fa-trash"></i></div>
                  {/* <button className='secondary-content'>Order</button> */}
                  {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a><br /> */}
                  {/* <a href="#!" className="secondary-content"><i className="material-icons">kbkxsa</i></a> */}
                </li>
              </ul>)
            })}

                </div>
         <div className="col m4 s10" style={{textAlign:'center'}}>
            <h3>Total Price</h3>
                {this.state.cards.map((card,index)=>{
                return(
                <div key={index}>
                    <span  style={{float:'left'}}>{index+1}</span> {card.price}
                </div> )
            })}
            <hr/>
            <h5>Total Amount: {this.total()}</h5> <br/><br/><br/>

            <Link to="/orderDetails"
                    className='btn btn-primary'
                        >Order</Link>


        </div>

            </div>
            </div> {/* row */}
            <br/><br/>



        </div>

        );
    }
}
export default Cart