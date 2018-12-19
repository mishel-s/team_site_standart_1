import React, { Component } from 'react';
import './styles.css';
import PlayersList from '../../containers/playersList/playersList.js';
import {NavLink} from 'react-router-dom';

class SquadShort extends Component {

  render() {
    const { squad } = this.props;
    return (
      <div className="squadShort col-12 px-0 my-3">  
        <div className="squadShort_title d-flex justify-content-center">
          <h5>Состав</h5>
        </div>
        <div className="squadListBlock second d-flex flex-column p-1">
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
}

export default SquadShort;