import React from 'react';
import {NavLink} from 'react-router-dom';

import {PlayersList} from '../../containers/PlayersList';

import './styles.css';

export const SquadShortSecond = ( {squad} ) => {
  return (
    <div className="squadShort col-12 px-0 my-3">  
      <div className="squadShort_title d-flex justify-content-center">
        <h5>Состав</h5>
      </div>
      <div className="squadListBlockSecond d-flex flex-column p-1">
        <PlayersList 
          type={"squadShort"}
          quantity={5}
          playersData={squad}
        />
        <NavLink to="/squad" className="bt-squadLink d-flex justify-content-center align-items-center mt-2 mb-1">
          весь состав
        </NavLink>
      </div>
    </div>
  )
}