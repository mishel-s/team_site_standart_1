import React from 'react';

import './styles.css';

export const BtShare = ( {toggleShareList} ) => {
  return (
    <div className="btShare" onClick={ toggleShareList }>
      <div className="btShare-lineTop"></div>
      <div className="btShare-left">
        <div className="btShare-circle"></div>
      </div>
      <div className="btShare-rigth">
        <div className="btShare-circle"></div>
        <div className="btShare-circle"></div>
      </div>
      <div className="btShare-lineBottom"></div>
    </div>
  )
}