import React, { Component } from 'react';
import axios from 'axios';

class EditProduct extends Component {

    constructor(props){
        super(props)

        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductColour = this.onChangeProductColour.bind(this);
        this.onChangeProductImageSrc = this.onChangeProductImageSrc.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductSize = this.onChangeProductSize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            price: '',
            size: '',
            colour: '',
            name: '',
            description: '',
            src: '',
        }
    }


    componentDidMount(){
        console.log(this.props.match.params.id)
        axios.get('http://localhost:4000/products/'+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    price : response.data.price,
                    size : response.data.size,
                    colour : response.data.colour,
                    description : response.data.description,
                    src : response.data.src,
                    name : response.data.name,
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }


    onChangeProductDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeProductName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeProductColour(e){
        this.setState({
            colour: e.target.value
        });
    }

    onChangeProductSize(e){
        this.setState({
            size: e.target.value
        });
    };

    onChangeProductPrice(e){
        this.setState({
            price: e.target.value
        });
    };
    onChangeProductImageSrc = e => {
        console.log(e.target.files[0])
        this.setState({
            src:e.target.files[0].name
        })
    };
    onSubmit(e){
        e.preventDefault();

        const obj = {
            name: this.state.name,
            price: this.state.price,
            colour: this.state.colour,
            description: this.state.description,
            size: this.state.size,
            src: this.state.src,
        }
        axios.post('http://localhost:4000/products/update/'+this.props.match.params.id ,obj)
            .then(res => console.log(res.data));

            this.props.history.push('/admin');

    }








    render(){

        return(
            <div className="container">
                <div  className="row">
                    <div>

            <h3 className="SubmitForm" style={{textAlign:'center'}}>Update Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Name</label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.name} 
                            onChange={this.onChangeProductName}  />
                    </div>

                    <div className="form-group">
                    <label>Price</label>
                    <input  type="number"
                            className="form-control"
                            value={this.state.price} 
                            onChange={this.onChangeProductPrice}  />
                    </div>

                    <div className="form-group">
                    <label>Colour</label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.colour} 
                            onChange={this.onChangeProductColour}  />
                    </div>

                    <div className="form-group">
                    <label>Description</label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.description} 
                            onChange={this.onChangeProductDescription}  />
                    </div>

                    <div className="form-group">
                    <label>Choose Files</label>
                    <input  type="file"
                            className="form-control"
                            // value={this.state.name} 
                            onChange={this.onChangeProductImageSrc}  />
                    </div>



                    <div className="form-group">
            <label>Select Size:</label>
           <label>
           <input
                 type="radio"  name="sizeOptions" 
                value="small" id="small"
                defaultChecked={this.state.size==='small'}
                onChange={this.onChangeProductSize} />
                <span> Small</span>
           </label>


            
            <label>
            <input type="radio" name="sizeOptions"
                value="medium" id="medium"
                defaultChecked={this.state.size==='medium'}
                onChange={this.onChangeProductSize} />
               <span> Medium</span>
            </label>
            

            
            <label>
            <input type="radio" name="sizeOptions"
                value="large" id="large"
                defaultChecked={this.state.size==='large'}
                onChange={this.onChangeProductSize} />
               <span>Large</span> 
            </label>
            

            
            <label>
            <input type="radio" name="sizeOptions"
                  className='form-check-input'
                value="xlarge"  id="xlarge"
                defaultChecked={this.state.size==='xlarge'}
                onChange={this.onChangeProductSize} />
                <span>XLarge</span>
            </label>

            <br/><br/>

            <div className="group-form">
                <input type="submit"
                        value="Update Product"
                        className="btn btn-primary"/>

            </div>

            






            </div>

                </form>

            </div>

                </div>
            </div>
        );
    }
}

export default EditProduct;