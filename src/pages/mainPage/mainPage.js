import React, { Component } from 'react';
import './styles.css';
import Partners from '../../containers/partners/partners.js';
import Sidebar from '../../containers/sidebar/sidebar.js';
import Main from '../../containers/main/main.js';

import { teamData } from '../../api/teamData.js';

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Partners 
          teamData={teamData}
        />
        <div className="col-12 d-flex flex-column flex-md-row sidebar-main"> 
          <Main 
            teamData={teamData}
          />
          <Sidebar 
            teamData={teamData}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default MainPage;