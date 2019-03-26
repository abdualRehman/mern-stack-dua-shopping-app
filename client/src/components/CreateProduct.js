import React, { Component } from 'react';
import axios from 'axios'


class CreateProduct extends Component {

    constructor(props){
        super(props);
        this.onChangeProductColour = this.onChangeProductColour.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductSize = this.onChangeProductSize.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this)


        this.state = {
            price:'',
            colour:'',
            size:'',
            description:'',
            name:'',
            src:'',
            hsrc:'',
            selected: false
        }
    }
    onChangeProductPrice(e) {
        this.setState({
            price: e.target.value
        })
    };
    onChangeProductColour(e) {
        this.setState({
            colour: e.target.value
        })
    };
    onChangeProductSize(e) {
        this.setState({
            size: e.target.value
        })
    };
    onChangeProductDescription(e) {
        this.setState({
            description: e.target.value
        })
    };
    onChangeProductName(e) {
        this.setState({
            name: e.target.value
        })
    };
    // onChangeProductImageSrc = e => {
    //     console.log(e.target.files[0])
    //     this.setState({
    //         src:e.target.files[0].name
    //     })
    // };
    onChangeImg(e){
        e.preventDefault();
        var src = JSON.stringify(e.target.files[0].name)
       localStorage.setItem('src', src)
    }
    // onChangeProductDescription(e) {        //for image and hover property
    //     this.setState({
    //         description: e.target.value
    //     })
    // };
    // onChangeProductDescription(e) {
    //     this.setState({
    //         description: e.target.value
    //     })
    // };

    onSubmit(e){
        e.preventDefault();
        // alert('Product save')
        var data =  localStorage.getItem('src')
        var Sdata = JSON.parse(data)

        console.log(`Product submitted:`)
        console.log(`Product name:${this.state.name}`)
        console.log(`Product price:${this.state.price}`)
        console.log(`Product description:${this.state.description}`)
        console.log(`Product size:${this.state.size}`)
        console.log(`Product colour:${this.state.colour}`)
        console.log(`Product Image Src:${Sdata}`)

        const newProduct = {
            price: this.state.price,
            size: this.state.size,
            name: this.state.name,
            description: this.state.description,
            colour: this.state.colour,
            src: Sdata
        }


        axios.post('http://localhost:4000/products/add', newProduct)
            .then(res => console.log(res.data))



        this.setState({
            price:'',
            colour:'',
            size:'',
            description:'',
            name:'',
            src:null,
            hsrc:'',
            selected: false
        })
        localStorage.removeItem('src');


    }

    render() {

      return (
        <div style={{marginTop:20,marginLeft:20}}>
            <h2 className="SubmitForm" >Create Product List</h2>
        <label htmlFor="image">Please Upload Image First</label>
            <form action="/profile" method="POST"  encType="multipart/form-data">
            <input type="file" onChange={this.onChangeImg} name="profilePicture" multiple /><br/><br/>
            <input  className="btn btn-primary right" type="submit" name="" id="" value="Upload Picture" />
            </form>
        <form
         onSubmit={this.onSubmit} >
            <div className="form-group">
            <label>Enter Price</label>
            <input type="number"
                className="form-control"
                value={this.state.price}
                onChange={this.onChangeProductPrice} />
            </div>
            <div className="form-group">
            <label>Enter Colour Name</label>
            <input type="text"
                className="form-control"
                value={this.state.colour}
                onChange={this.onChangeProductColour} />
            </div>
            <div className="form-group">
            <label>Enter Name of Item</label>
            <input type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeProductName} />
            </div>
            <div className="form-group">
            <label>Enter Description</label>
            <input type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeProductDescription} />
            </div>


            {/* <div className="form-group">
            <label>Choose File</label>
            
            <input type="file"
                className="form-control" encType="multipart/form-data" multiple
                // value={this.state.src}s 
                name="profilePicture"
               onChange={this.onChangeProductImageSrc} />
            </div> */}
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
            


            </div>

            <div style={{width:500}} className="form-group">

                <br/><input type="submit" value="Create Product" className="btn btn-primary" /><br/><br/>

            </div>
        
        
            </form>

        </div>

      )
  
    }
  
  }

  export default CreateProduct