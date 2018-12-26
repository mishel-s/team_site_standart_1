import React from 'react';

import {News} from '../News';
import NewsBaner from '../../components/NewsBaner';

import './styles.css';

export const Main = ( {teamData} ) => {
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