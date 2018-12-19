import React, { Component } from 'react';
import './styles.css';
import News from '../news/news.js';
import NewsBaner from '../../components/newsBaner/newsBaner.js';

class Main extends Component {
  render() {
    const { teamData } = this.props;
    return (
      <main className="col-12 col-md-8 order-md-2 align-items-stretch px-0">   
        <NewsBaner
          quantity={3}
          publications={teamData.publications}
        />  
        <News 
          publications={teamData.publications}
        />
      </main>
    )
  }
}

export default Main;