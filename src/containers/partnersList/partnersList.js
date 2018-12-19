import React, { Component } from 'react';
import './styles.css';
import PartnerItem from '../../components/partnerItem/partnerItem.js';

class PartnersList extends Component {
  render() {
    const { partners } = this.props;
    return (
      <div className="col-12 col-md-10 d-flex justify-content-around align-items-center px-1 header--adv-partners">
        <div className="col-12 col-md-10 d-flex justify-content-around align-items-center px-0 partnersList">
          { partners.length
            ? (partners.slice(0, 5)).map((partner)=> (
                <div className="col-2 px-0" key={partner.id} id={partner.id}>
                  <PartnerItem
                    data={partner}
                  />
                </div>
              ))
            : <span>нет фото</span>
          }
        </div>    
      </div>
    )
  }
}

export default PartnersList;