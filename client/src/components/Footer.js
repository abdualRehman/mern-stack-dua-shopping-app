import React, { Component } from 'react';
import '../App.css'

class Footer extends Component{
    render(){
        return(
            <div>
                 <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col l6 s12" style={{textAlign:'center'}}>
                <p>AliExpress | 1688.com | Taobao Global | Alipay | Lazada </p>

 <p> Browse Alphabetically: Onetouch | Showroom | Country Search |  Suppliers | Wholesaler | Affiliate </p>

<p>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - Law Enforcement Compliance Guide </p>

<p>© 1999-2019 Alibaba.com. All rights reserved.</p>
              </div>
              <div className="col l4 offset-l2 s12" style={{textAlign:'center'}}>
                <h5 className="white-text">Contact</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons fa-2x">wb_auto</i></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="fab fa-google-plus-g fa-2x"></i></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="fab fa-facebook fa-2x"></i></a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><i className="fab fa-aviato fa-3x"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright white">
            <div className="container grey-text">
            © 2014 Copyright Text
            <a className="grey-text right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
            </div>
        );
    }
}
export default Footer;