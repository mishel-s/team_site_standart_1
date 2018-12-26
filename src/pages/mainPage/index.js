import React from 'react';

import Partners from '../../containers/Partners';
import {Sidebar} from '../../containers/Sidebar';
import {Main} from '../../containers/Main';
import {teamData} from '../../api/teamData.js';

import './styles.css';

export const MainPage = () => {
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