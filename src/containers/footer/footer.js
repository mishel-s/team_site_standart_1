import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/img/logo/logo-odessa.png';
import mailF from '../../assets/img/logo/socials/mail.png';
import fbF from '../../assets/img/logo/socials/facebook.png';
import vkF from '../../assets/img/logo/socials/vk.png';
import ytF from '../../assets/img/logo/socials/youtube.png';
import fimaLogoM from '../../assets/img/logo/fima-logo-m.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">    
        <div className="container px-0">
          <div className="col-12 d-flex flex-column px-1">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3 pb-1 py-md-3 f-info" >     
              <div className="col-12 col-md-2 d-flex justify-content-center pb-2 pb-md-0 f-info-logo">     
                <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                  <img src={logo} width="50" alt="logo" />
                </a> 
              </div>
              <div className="col-12 col-md-7 d-flex justify-content-center pb-2 pb-md-0 f-info-socials">     
                <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                  <img src={mailF} width="40" alt="email" />
                </a>
                <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                  <img src={fbF} width="40" alt="fb" />
                </a>
                <a className="navbar-brand mx-1 py-0" href="#" target="_blank">
                  <img src={vkF} width="40" alt="vk" />
                </a>
                <a className="navbar-brand mx-1 py-0" href="#" target="_blank">
                  <img src={ytF} width="40" alt="you-tube" />
                </a> 
              </div>
              <div className="col-12 col-md-3 d-flex align-items-center text-white pl-0 f-fima-info"> 
                <img className="fimaLogoM d-none d-md-block mr-2" src={fimaLogoM} width="40" alt="fima4u"/>
                <span className="text-left">Сайт создан на платформе <br/>
                  <a href="http://fima4u.com" target="_blank" rel="noopener noreferrer">fima4u.com</a>
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center f-other">     
              <div className="col-12 px-0">
                <span className="text-white">© Site Name Footer 2018</span> 
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;