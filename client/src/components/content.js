import React, { Component } from 'react';
import '../App.css'
import Team from './teamMember'

class Content extends Component {
    render() {
      return (
        <div>
            <br /><br />
            <img alt="abc" src="images/sale-pic.jpg"
            className="responsive-img" 
            />
            <br /><br />
            <div className="row">
              <div className="container-fluid">
                <div className="col m4 s12 l4"><br/><br/>
                  <h1 className="someNews">SOME <br/>NEWS</h1><br/>
                </div>
                <div className="col m8 s12 l8"><br/><br/>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores voluptatum, mollitia quasi excepturi, voluptate expedita modi illum itaque ea enim fugit nemo cumque nihil magni. Sit sapiente ullam in.</p>
                  <h3>dolores voluptatum, mollitiat</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores voluptatum, mollitia quasi excepturi, voluptate expedita modi illum itaque ea enim fugit nemo cumque nihil magni. Sit sapiente ullam in.</p>
                  <h3>dolores voluptatum, </h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores voluptatum, mollitia quasi excepturi, voluptate expedita modi illum itaque ea enim fugit nemo cumque nihil magni. Sit sapiente ullam in.</p>
                </div>

              </div>

            </div>
            <hr className="hrLine"/>
            <Team />
            <hr className="hrLine"/>



          </div>
      );
    }
  }
  
  export default Content;