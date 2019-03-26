
import React, { Component } from 'react';
import '../App.css';
// import axios from 'axios'
// import fso, {FileSystemObject,ActiveXObject,CreateObject} from 'fso';

class Upload extends Component{
    constructor(){
        super()
        this.onChangeImg = this.onChangeImg.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            src : ""
        }
    }
    onChangeImg(e){
       
        this.setState({
            src: e.target.files[0].name
        })
        // console.log(this.state.src)
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state.src) 


        const src = this.state.src 
        var option =  {
            method:'POST',
            body:JSON.stringify(src),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch('https://localhost:4000/profile',option)
        .then( (res) =>  res.text() )
        .then(message=> console.log( message ))
        .catch( error=>console.log( error ))















        // var src = JSON.stringify(this.state.src)
        // FileSystemObject.CopyFile "", "c:\tempfolder"

        // if (window.DOMParser) {
        //     // code for modern browsers
        //     fso = new DOMParser();
        //     fso = fso.parseFromString(name,"text/xml");
        //   } else {
        //     // code for old IE browsers
        //     fso = new ActiveXObject("Microsoft.XMLDOM");
        //     fso.async = false;
        //     fso.loadXML(name);
        //   }



//         fso = new ActiveXObject("Scripting.FileSystemObject");
// fso.CopyFile (this.state.src, "E:\\Last-Project\\shopingsite\\public\\uploads")


// FileSystemObject.CopyFile  this.state.src , "E:\\Last-Project\\shopingsite\\public\\uploads"


    }

    render(){
        return(
            <div>


{/* onSubmit={this.onSubmit} */}
            {/* <form action="/profile" method="POST"  encType="multipart/form-data">
            <input type="file" onChange={this.onChangeImg} name="profilePicture" multiple />
            <input type="submit" name="" id="" value="Upload Picture" />
            </form> */}















            {/* <form onSubmit={this.onSubmit}>

             <div className="form-group">
            <label>Choose File</label>
            <input type="file"
                className="form-control"
                // value={this.state.src}
                onChange={this.onChangeImg} />
            </div>

                <div>
                <button type="submit" className="btn">Submit</button> <br/><br/>
                </div>
  
        
            </form> */}
            </div>
        )
    }
}
export default Upload;