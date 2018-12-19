import React, { Component } from 'react';
import './styles.css';
import MenuHeader from '../../components/menuHeader/menuHeader.js';

import mailH from '../../assets/img/logo/socials/mail-c.png';
import fbH from '../../assets/img/logo/socials/facebook-c.png';
import vkH from '../../assets/img/logo/socials/vk-c.png';
import ytH from '../../assets/img/logo/socials/youtube-c.png';


class Header extends Component {
  render() {
    const { 
      teamData: { name, phone, email }
    } = this.props;
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="header col-12 d-flex fixed-top flex-column px-0">
              <div className="container header-info d-none d-md-flex justify-content-between px-0">
                <div className="col-4 d-flex justify-content-start py-1">
                  <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                    <img src={mailH} width="32" alt="email" />
                  </a>
                  <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                    <img src={fbH} width="32" alt="fb" />
                  </a>
                  <a className="navbar-brand mx-1 py-0" href="#" target="_blank">
                    <img src={vkH} width="32" alt="vk" />
                  </a>
                  <a className="navbar-brand mx-1 py-0" href="#" target="_blank">
                    <img src={ytH} width="32" alt="you-tube" />
                  </a>
                </div>
                <div className="col-6 col-lg-5 d-flex align-items-center justify-content-end">
                  <span className="px-2">{phone}</span>
                  <span className="px-2">{email}</span>
                </div>
              </div>
              <MenuHeader 
                name={name}
              />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;