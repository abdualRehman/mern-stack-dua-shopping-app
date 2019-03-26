import React, { Component } from 'react';
import Modal from 'react-awesome-modal';


class ProductsItem extends Component {
    constructor(props){
        super(props)     
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            visible: false,
            img:props.details.src,

        };
    }
    openModal(){
        this.setState({
            visible:true
        });
    }
    closeModal(){
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
          src={this.state.img} 
          onMouseEnter={()=>{
              this.setState({
                  img:this.props.details.hsrc
              })
          }}
          onMouseOut={()=>{
            this.setState({
                img:this.props.details.src
            })
          }} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.details.name}<i className="material-icons right">more_vert</i></span>
          <button className="btn-floating btn-small waves-effect waves-light red btn"  onClick={()=>this.openModal() }><i className="material-icons">add</i></button>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.details.name}<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
            </div>

            {/* Modal Strmodal2ucture */}
        <Modal 
        visible={this.state.visible}
        width="500"
        height="600"
        effect="fadeInUp"
        onClickAway={()=>this.closeModal()} >
          <div className="modalBody">
          <div className="row innerCardBody">
              <div className="col s6">
                <img alt="abc" src={this.props.details.src}
                 className="responsive-img" /><br/>
                    {this.props.details.name}
              </div>
              <div className="col s6">
                <form>
                  <b>Price:</b>
                  <em className="red-text">15000</em> Rs.
                  <br />
                  <br />
                  <b>Select Color:</b>
                  <p>
                    <label>
                      <input type="checkbox" value='Pink' />
                      <span>Pink</span>
                    </label >
                  </p>
                  <p>
                    <label>
                      <input type="checkbox" value='black'  />
                      <span>Black</span>
                    </label>
                  </p>
                  <p>

                    <label>
                      <input type="checkbox"  value='red'  />
                      <span>Red</span>
                    </label>
                  </p>

                  <b>Size:</b>

                  <div className="input-field inline">
                    <select  className="">

                      <option disabled value='selected'>Please Select</option>
                      <option value='small' className="center-align">Small</option>
                      <option value='medium'>Medium</option>
                      <option value='large'>Large</option>
                      <option value='Xlarge'>X.Large</option>

                    </select>
                  </div>
                  <br />

                  <b>Quantity:</b>

                  <div className="input-field inline">
                    <select>
                      <option value="selected" disabled>Please Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <button type="submit" className="btn right black white-text waves-effect waves-light" id="order" 
                   onClick={(e)=>{
                    this.props.clickHandler(this.props.details);
                    this.props.addTask(e);
                }}>Add To Cart</button>
                </form>
              </div>
            </div> 
            <div className="modal-footer">
            <button className="waves-effect waves-light btn red darken-4 modal-close" onClick={()=>
            this.closeModal() } >Close</button>
          </div>

            </div>
        </Modal>

                 {/* row */}
       </div>
        );
    }
}



export default ProductsItem;