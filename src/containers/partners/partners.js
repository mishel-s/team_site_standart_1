import React, { Component } from 'react';
import './styles.css';
import PartnersList from '../partnersList/partnersList.js';
import {withRouter} from 'react-router-dom';

class Partners extends Component {
    render() {
      const { 
        teamData: { name, logo, partners }
      } = this.props;
      return (
        <div className="partners col-12 d-flex px-0 my-2">
          <div className="team-logo d-none d-md-flex flex-column col-md-2 justify-content-center align-items-center p-1">        
            <img style={{opacity: "0.7"}} width="100" src={logo} alt={name} onClick={()=> { this.props.history.push('/team_site_standart_1') }} />
            <h1 className="text-center">{name}</h1>
          </div>
          <PartnersList
            partners={partners}
          />
        </div>
      )
    }
  }

  export default withRouter(Partners);