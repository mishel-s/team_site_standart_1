import React, { Component } from 'react';
import './App.css';
import Header from './containers/header/header.js';
import Footer from './containers/footer/footer.js';
import { teamData } from './api/teamData.js';

import SwitchRoute from './components/switchRoute/switchRoute.js';

class App extends Component {
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