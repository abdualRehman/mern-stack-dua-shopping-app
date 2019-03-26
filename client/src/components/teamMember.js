import React, { Component } from 'react';
import '../App.css'



class Team extends Component {
    render() {
      return (
        <div>
        <div style={{margin:'auto'}}>
        <h2 className="TeamMeb">AWESOME & SKILLED</h2>
        <h2 className="TeamMeb">DESIGNERS</h2>
        </div>
        <div className="row">
        <div className="container-fluid">
            <div className="col s6 m4 l2">
            <div className="card medium">
        <div className="card-image">
          <img src="images/team-2.png" alt="team" />
        </div>
        <div className="card-content">
          <h4>CHARLES TURNER</h4>
        </div>
        <div className="card-action white">
          <a href="!#" style={{color:'black'}}><i className="material-icons">mail</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">phone</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">voicemail</i></a>
          
        </div>
      </div>
            </div>

            <div className="col s6 m3 l3">
            <div className="card large">
        <div className="card-image">
          <img src="images/team-1.png" alt="team" />
        </div>
        <div className="card-content">
          <h4>DIONE CHOMITZ</h4>
        </div>
        <div className="card-action black" style={{textAlign:'center'}}>
          
        <a href="!#" style={{color:'white'}}><i className="material-icons">mail</i></a>
          <a href="!#" style={{color:'white'}}><i className="material-icons">phone</i></a>
          <a href="!#" style={{color:'white'}}><i className="material-icons">voicemail</i></a>
        </div>
      </div>
        </div>
        <div className="col s6 m4 l2">
            <div className="card medium">
        <div className="card-image">
          <img src="images/team-3.jpg" alt="team" />
        </div>
        <div className="card-content">
          <h4>SEAN COLLINS</h4>
        </div>
        <div className="card-action white">
          
        <a href="!#" style={{color:'black'}}><i className="material-icons">mail</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">phone</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">voicemail</i></a>
        </div>
      </div>
            </div>
            <div className="col s6 m4 l2">
            <div className="card medium">
        <div className="card-image">
          <img src="images/tm9.jpg" alt="team" />
        </div>
        <div className="card-content">
          <h4>CHERIS WALKER</h4>
        </div>
        <div className="card-action white" >
          
        <a href="!#" style={{color:'black'}}><i className="material-icons">mail</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">phone</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">voicemail</i></a>
        </div>
      </div>
            </div>
            <div className="col s6 m4 l2">
            <div className="card medium">
        <div className="card-image">
          <img src="images/team-5jpg.jpg" alt="team" />
        </div>
        <div className="card-content">
          <h4>POAL HAIMAN</h4>
        </div>
        <div className="card-action white">
          
        <a href="!#" style={{color:'black'}}><i className="material-icons">mail</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">phone</i></a>
          <a href="!#" style={{color:'black'}}><i className="material-icons">voicemail</i></a>
        </div>
      </div>
    </div>


        </div>
        </div>


        </div>
      );
    }
}
export default Team;