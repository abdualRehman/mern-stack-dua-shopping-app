import React, { Component } from 'react';
import ProductsItem from './ItemsAndModalStructure'



class ProductsList extends Component {
constructor(){
        super()
        this.changeStatus = this.changeStatus.bind(this);
        this.addTaskCart = this.addTaskCart.bind(this);
        this.state = {
          cards:[{
            src:'images/b2.jpg',
            hsrc:'images/b3.jpg',
            name:'Card Title2',
            id:'modal2',
            completed: false
          },{
            src:'images/b81.jpg',
            hsrc:'images/b80.jpg',
            name:'Card Title1',
            id:'modal1',
            completed: false
          },{
            src:'images/b11.jpg',
            hsrc:'images/b22.jpg',
            name:'Card Title3',
            id:'modal3',
            completed: false
          },{
            src:'images/b70.jpeg',
            hsrc:'images/b7.jpeg',
            name:'Card Title4',
            id:'modal4',
            completed: false
          },{
            src:'images/b5.jpeg',
            hsrc:'images/b50.jpeg',
            name:'Card Title2',
            id:'modal5',
            completed: false
          },{
            src:'images/b90.jpg',
            hsrc:'images/b9.jpg',
            name:'Card Title1',
            id:'modal6',
            completed: false
          },{
            src:'images/c4.jpeg',
            hsrc:'images/c40.jpeg',
            name:'Card Title3',
            id:'modal7',
            completed: false
          },{
            src:'images/c6.jpeg',
            hsrc:'images/c60.jpeg',
            name:'Card Title4',
            id:'modal8',
            completed: false
          }],
          selected:[  ],
          currenTask:[],
          selectedtask:[],
        }
      }
      changeStatus(index){
        // index.preventDefault();
        var selected = this.state.selected;
        selected.push({
            name:index.name,
            src:index.src
        })
        // console.log(select)
        this.setState(
            selected
        )
        localStorage.setItem('Scard',JSON.stringify(this.state.selected))
      }
      addTaskCart=(evt)=>{
          evt.preventDefault();
        console.log("addTask is run")
          
      }

      // addtask(evnt){
      //   evnt.preventDefault();
      //   let selectedtask = this.state.selectedtask
      //   let currentask = this.state.currentask
      //   selectedtask.push({
      //     name:currentask
      //   })
      //   this.setState({
      //     selectedtask:selectedtask
      //   })
      // }
      // updatetask(newValue){
      //   this.setState({
      //     currentask:newValue.target.value
      //   })
      // }

    render(){
        return(
            <div><br />
                <h3 style={{textAlign:'center'}}>Our New Products</h3>
                <br />
                <div className='row'>
                    <div className="container">
                     { this.state.cards.map((card,index)=>{
                        return <ProductsItem key={card.id} details={card}
                        index={index} addTask={this.addTaskCart} clickHandler={this.changeStatus}
                        currenTask={this.state.currenTask}
                         />
                        
                        })}
                    
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductsList;