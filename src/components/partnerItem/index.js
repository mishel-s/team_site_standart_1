import React from 'react';

import './styles.css';

export const PartnerItem = ( {data} ) => {
  return (
    <div className="partnerItem d-flex justify-content-center py-2">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img src={data.logo} className="partner-logo" alt={data.name} />
      </a>
    </div>
  )
}