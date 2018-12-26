import React, { Component } from 'react';

import {SwitchRoute} from './components/SwitchRoute';
import {Header} from './containers/Header';
import {Footer} from './containers/Footer';
import {teamData} from './api/teamData.js';
import getTeamInfo from './api/request.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teamInfo: []
    }
  }

  setTeamInfo = () => {
    getTeamInfo()
      .then(data => {
        this.setState({
          teamInfo: data,
        })
      })      
  } 

  render() {
    return (
      <div className="App">
        <Header 
          teamData={teamData}
        />
        <section className="content">
          <div className="container">          
            <SwitchRoute />
          </div>
        </section>
        <Footer 
          teamData={teamData}
        />
      </div>
    );
  }
}

export default App;