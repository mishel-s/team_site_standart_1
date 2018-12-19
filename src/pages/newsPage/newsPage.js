import React, { Component } from 'react';
import './styles.css';
import NewsList from '../../containers/newsList/newsList.js';
import { teamData } from '../../api/teamData.js';

class NewsPage extends Component {
  render() {
    return (
      <div className="publicationsPage col-12 d-flex flex-column px-0">
        <div className="publications-title col-12 d-flex justify-content-center align-items-center px-0 py-2">
          <h5>Новости</h5>
        </div>
        <div className="publications-filter col-12 d-flex justify-content-center align-items-center px-0 py-2">
          filter
        </div>
        <NewsList 
          quantity={teamData.publications.length}
          publications={teamData.publications}
        />
      </div>
    )
  }
}

export default NewsPage;