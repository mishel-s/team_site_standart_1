import React from 'react';

import MenuHeader from '../../components/MenuHeader';
import mailHeader from '../../assets/img/logo/socials/mail-c.png';
import facebookHeader from '../../assets/img/logo/socials/facebook-c.png';
import vkontakteHeader from '../../assets/img/logo/socials/vk-c.png';
import youtubeHeader from '../../assets/img/logo/socials/youtube-c.png';

import './styles.css';

export const Header = ({ teamData: {name, phone, email} }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header col-12 d-flex fixed-top flex-column px-0">
            <div className="container header-info d-none d-md-flex justify-content-between px-0">
              <div className="col-4 d-flex justify-content-start py-1">
                <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                  <img src={mailHeader} width="32" alt="email" />
                </a>
                <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                  <img src={facebookHeader} width="32" alt="fb" />
                </a>
                <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                  <img src={vkontakteHeader} width="32" alt="vk" />
                </a>
                <a className="navbar-brand mx-1 py-0" href="/" target="_blank">
                  <img src={youtubeHeader} width="32" alt="you-tube" />
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