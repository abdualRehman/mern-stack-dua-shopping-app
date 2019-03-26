import React, { Component } from 'react';

class Bridals extends Component {
    
    render(){
        function closeModal (){
            var x = document.getElementById('modal-container').className = "hidden";
          }
          
        return(
            
            <div>

    <div className="container">
        <div className="row">
            <div className="col s4">
        <a href="/" className="waves-effect waves-light">
          <img src="img/o1.jpeg" alt="abc" className="responsive-img button" id="one" />
          <p style="display:none;" className="imgP">
              2800
              </p>
        </a>
      </div>
       {/* <!-- 2nd column starts here --> */}
      <div className="col s4">
        <a href="/" className="waves-effect waves-light">
          <img src="img/05.jpeg" alt="abc" className="responsive-img button" id="one" />
          <p style="display:none;" className="imgP">
              800
              </p>
        </a>
      </div>
      {/* <!-- 3rd column starts here --> */}
      <div className="col s4">
        <a href="/" className="waves-effect waves-light">
          <img src="img/o2.jpeg" alt="abc" className="responsive-img button" id="one" />
          <p style="display:none;" className="imgP">
              5000
              </p>
        </a>
      </div>
        </div>
    </div>







                     {/* <!-- cutomize modal --> */}
  <div id="modal-container">
        <div className="modal-background">
          <div className="modal">
            <div className="row">
              <div className="col s9 m5" id="mainJqueryModel">
    
              </div>
              <div className="col s12 m7">
                <form action="#" className="left-align" id="mForm">
                  <b>Price:</b>
                  Rs.<em className="red-text" id="mPrice">18000</em> 
                  <br />
                  <br />
                  <b>Select Color:</b>
                  <p>
                    
                      <input type="checkbox" className="filled-in" />
                      <span>Pink</span>
                    
                  </p>
                  <p>
                    
                      <input type="checkbox" className="filled-in" />
                      <span>Black</span>
                    
                  </p>
                  <p>
    
                    
                      <input type="checkbox" className="filled-in" />
                      <span>Red</span>
                    
                  </p>
    
                  <b>Size:</b>
    
                  <div className="input-field inline">
                    <select>
    
                      <option value="" >Please Select</option>
                      <option value="small" className="center-align">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="X.large">X.Large</option>
    
                    </select>
                  </div>
                  <br />
    
                  <b>Quantity:</b>
    
                  <div className="input-field inline">
                    <select>
                      <option value="">Please Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <a href="!#" className="btn right black white-text waves-effect waves-light" id="now">Order
                    Now</a>
                  <br />
                  <a href="!#" className="btn right close waves-effect waves-light red darken-4" id="red"
                    onClick={closeModal()}>Close</a>
                  <svg className="modal-svg" width="100%" height="100%" preserveAspectRatio="none">
                    <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
    
                  </svg>
    
                </form>
              </div>
            </div>
    
          </div>
    
        </div>
      </div>
            </div>
            
        );
    }
}

export default Bridals