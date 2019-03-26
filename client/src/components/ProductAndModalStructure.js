import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class Product2 extends Component {
    constructor(props){
      super(props)     
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.state = {
          visible: false,
          // img:props.details.src,
  
      };
  }
  openModal(){
      this.setState({
          visible:true
      });
  }
  closeModal(evt){
      evt.preventDefault();
      this.setState({
          visible:false
      });
  }
    render(){
      return(
        <div>
        <div className="col s12 m6 l4">
                  <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" width="220px" height="450px" alt="emoji" 
                src={'images/'+this.props.product.src} 
                // onMouseEnter={()=>{
                //     this.setState({
                //         img:this.props.details.hsrc
                //     })
                // }}
                // onMouseOut={()=>{
                //   this.setState({
                //       img:this.props.details.src
                //   })
                // }} 
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{this.props.product.name}<i className="material-icons right">more_vert</i></span>
                <button className="btn-floating btn-small waves-effect waves-light red btn"  onClick={()=>this.openModal() }><i className="material-icons">add</i></button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.product.name}<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                <p>{this.props.product.description}</p>
              </div>
            </div>
                  </div>
      
                  {/* Modal Strmodal2ucture */}
              <Modal 
              visible={this.state.visible}
              width="500"
              height="600"
              effect="fadeInDown"
              onClickAway={(e)=>this.closeModal(e)} >
                <div className="modalBody"style={{paddingTop:'-10'}}>
                <div className="row innerCardBody">
                    <div className="col s8">

                    <h5 style={{textAlign:'center'}}>{this.props.product.name}</h5>

                      <img alt="abc" src={'images/'+this.props.product.src}
                       width="250" /><br/>
                       <form>
                        
                        <br />


                        <button type="submit" className="btn right black white-text waves-effect waves-light" id="order" 
                         onClick={(e)=>{
                          this.props.clickHandler(this.props.product);
                          this.props.addTask(e);
                      }}>Add To Cart</button>


                      <div className="modal-footer">
                  <button className="waves-effect waves-light btn red darken-4 modal-close" onClick={(e)=>
                  this.closeModal(e) } >Close</button>
                </div>
                      </form>
                        
                    </div>
                    <div className="col s4">
                        <b>Price:</b>
                        <em className="red-text">{this.props.product.price}</em> Rs.
                        <br />
                        <b>Size:</b>
                        <em className="red-text">{this.props.product.size}</em>
                        <br />
                        <p style={{overflow:'hidden'}}>{this.props.product.description}</p>
                    </div>
                  </div> 
                  <br />
                  
      
                  </div>
            </Modal>
        </div>
      );
    }
  }
  








export default Product2;