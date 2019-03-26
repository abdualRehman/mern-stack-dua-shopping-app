import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class AdminPanalProducts extends Component {




    handleDelete(id){
        console.log(id);
        let product = {id:id};
        
        var option ={
            method:'Delete',
            body: JSON.stringify(product),
            header: {'Content-Type':'application/json'}
        }
        // console.log(option)
        fetch('http://localhost:4000/deleteProduct/'+id,option)
            .then((res)=> res.json())
            .then((json) => {
                console.log(json);
                if(json.no.n===0){
                    alert('No Such User Exited in Database');
                }else{
                    alert(`${json.no.n} user delete`);
                }
            })
            .catch((err)=>{
                console.log(err);
            })

    }
   
    render(){
        return(
            <div>
                <ul className="collection">
                <li className="collection-item avatar">
                <img src={'images/'+this.props.product.src} alt="" className="circle" />
                  <span className="title">{this.props.product.name}</span>
                  <p>Price: ${this.props.product.price}</p>
                  <p>size: {this.props.product.size} </p>
                   <div  className='secondary-content' style={{float:'right'}}>
                   <i onClick={()=>{
                       this.handleDelete(this.props.product._id)
                   }} className="fas fa-trash"></i>
                    </div>
                    
                   <div  style={{float:'right',marginTop:-20}} >
                   <Link to={"/edit/"+this.props.product._id} ><i className="far fa-edit"></i></Link></div>
                  
                </li>
              </ul>
            </div>
        );
    }
}

export default AdminPanalProducts;