import React, { Component } from 'react';
import {register} from './UserFunctions'

class Register extends Component{
    constructor(){
        super()
        this.state = {
            firstName:'',
            last_name:'',
            email:'',
            password:'',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeFirstname =this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
    }
    onChange (e){
        this.setState({ [e.target.name] : e.target.value})
    }
    onChangeFirstname(e){
        this.setState({
            firstName:e.target.value
        })
    }
    onChangeLastname(e){
        this.setState({
            last_name:e.target.value
        })
        

    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            first_name: this.state.firstName,
            last_name: this.state.last_name,
            email : this.state.email,
            password : this.state.password,
        }
        console.log(user)
        register(user).then(res  =>{
            this.props.history.push('/login')
        })

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div>

                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="SubmitForm" >Please Register</h1>


                            {/* <div className="form-group">
                            <label>Enter Colour Name</label>
                            <input type="text"
                             className="form-control"
                            value={this.state.colour}
                            onChange={this.onChangeProductColour} />
                            </div> */}


                        <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                        className='form-control'
                        placeholder="Please Enter First Name"
                        value={this.state.firstName}
                        onChange={this.onChangeFirstname}
                        />
                        </div>


                        <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text"
                        className='form-control'
                        placeholder="Please Enter First Name"
                        value={this.state.last_name}
                        onChange={this.onChangeLastname}
                        />
                        </div>  


                        <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email"
                        className='form-control'
                        name="email"
                        placeholder="Please enter email"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                        className='form-control'
                        name="password"
                        placeholder="Please enter password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                        </div>
                    <button className="btn btn-primary" type="submit">
                    Register</button>
                        
                        <button className="btn btn-primary right"
                    onClick={()=>{
                        this.props.history.push('/login')
                    }} type="submit">
                    Login</button>


                    </form>
                    </div>
                </div>

            </div>
        )
    }
}
export default Register;