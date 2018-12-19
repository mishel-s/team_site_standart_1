import React, { Component } from 'react';
import './styles.css';

class PartnerItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="partnerItem d-flex justify-content-center py-2">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <img src={data.logo} className="partner-logo" alt={data.name} />
        </a>
      </div>
    )
  }
}

export default PartnerItem;