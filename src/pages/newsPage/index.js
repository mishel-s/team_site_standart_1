import React from 'react';

import {NewsList} from '../../containers/NewsList';
import { teamData } from '../../api/teamData.js';

import './styles.css';

export const NewsPage = () => {
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