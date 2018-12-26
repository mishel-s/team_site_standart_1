import React from 'react';

import logo from '../../assets/img/logo/logo-odessa.png';

import './styles.css';

export const VideoItem = ( {data} ) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" 
              src={(data.video !== null) ? data.video : logo } 
              title={data.name} allowFullScreen> 
      </iframe>
    </div>
  )
}