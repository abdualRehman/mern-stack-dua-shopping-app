import React , {Component} from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
 

class Profile extends Component{
    constructor(){
        super()
        this.tokenAvailible =this.tokenAvailible.bind(this)
        this.tokenNotAvailible =this.tokenNotAvailible.bind(this)
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this)
        this.state = {
            first_name :'',
            last_name :'',
            email :'',
            arry:'',
        }
    }
    onChangeEvent(e){
        this.setState({
            arry : e.target.value
        })
        
    }
    onSubmitEvent(e){
        e.preventDefault();
        console.log("state array "+this.state.arry);

        const newCart = {
            first_name :this.state.first_name,
            last_name : this.state.last_name,
            email : this.state.email,
            cart : this.state.arry
        }

        axios.post('http://localhost:4000/users/carts', newCart)
        .then(res => console.log(res.data))
    }

    tokenAvailible(){
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        this.setState({
            first_name : decode.first_name,
            last_name : decode.last_name,
            email : decode.email,
        })
    }
    tokenNotAvailible(){
        this.props.history.push('/404')
    }



    componentDidMount(){
        const token = localStorage.usertoken
        if(token==null){
            this.tokenNotAvailible()
        }
        else{
       this.tokenAvailible();
        }
    }
    render(){
        return(
            <div className="container">
                <div className="jumbutron">
                    <h1 className="text-center center">PROFILE</h1>
                </div>

                <label htmlFor="first_name">First Name</label>
                <p>{this.state.first_name}</p>
                <label htmlFor="last_name">Last Name</label>
                <p>{this.state.last_name}</p>
                <label htmlFor="email">Email</label>
                <p>{this.state.email}</p>
                <form onSubmit={this.onSubmitEvent} >Entry: 
                <input type="text"
                onChange={this.onChangeEvent} />
                <button onSubmit={this.onSubmitEvent}>Add</button>
                </form>
            </div>
        )
    }
}
export default Profile