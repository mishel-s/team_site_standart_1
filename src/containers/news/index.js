import React from 'react';
import {NavLink} from 'react-router-dom';

import {NewsList} from '../NewsList';

import './styles.css';

export const News = ( {publications} ) => {
  return (
    <div className="col-12 d-flex flex-column px-0 publications">
      <div className="col-12 d-flex justify-content-center align-items-center px-0 py-2 publications-title">
        <h5>Новости</h5>
      </div>
      <NewsList 
        quantity={6}
        publications={publications}
      />
      <NavLink to="/news" className="d-flex justify-content-center align-items-center m-2 mb-1 bt-publicationsListLink">
        все новости
      </NavLink>
    </div>
  )
}