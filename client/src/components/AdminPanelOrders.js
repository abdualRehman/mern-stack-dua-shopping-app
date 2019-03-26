import React, { Component } from 'react';

class AdminPanelOreders extends Component{
    
    handleComplete(id){
        console.log(id);

        let order = {id:id};

        var option ={
            method:'Delete',
            body: JSON.stringify(order),
            header: {'Content-Type':'application/json'}
        }
        // console.log(option)
        fetch('http://localhost:4000/deleteOrder/'+id,option)
            .then((res)=> res.json())
            .then((json) => {
                console.log(json);
                if(json.no.n===0){
                    alert('No Such User Exited in Database');
                }else{
                    alert(`${json.no.n} Order Completed`);
                }
            })
            .catch((err)=>{
                console.log(err);
            })





    }



    render(){

        return(
            <div>
            <div className="SubmitForm" style={{width:'80%',margin:'auto',padding:10}}>
                <h5>Name : {this.props.order.fname} {this.props.order.lname}</h5>
                <h5>Email : {this.props.order.email}</h5>
                <h5>Address : {this.props.order.address}</h5>
                <h5>Message : {this.props.order.message}</h5>
                <h3>Products Details </h3>
                <input type="button" className="btn btn-primary right" 
                onClick={()=>{
                    this.handleComplete(this.props.order._id)
                }}
                value="Complete" />
            {this.props.order.carts.map((cart,i)=>{
            return  <table key={i}  className="highlight">
            <thead>
              <tr>
                  <th>Item Name</th>
                  <th>Item size</th>
                  <th>Item Price</th>
              </tr>
            </thead>
    
            <tbody>
              <tr>
                <td>{cart.name}</td>
                <td>{cart.size}</td>
                <td>{cart.price}</td>
              </tr>
            </tbody>
          </table>
            })}

    

                











            </div>

            </div>
        )
    }
}
export default AdminPanelOreders;