import React, { Component } from 'react';

import {PlayersList} from '../../containers/PlayersList';
import {SquadPositionFilter} from '../../components/filters/SquadPositionFilter';
import {teamData} from '../../api/teamData.js';

import './styles.css';

class Squad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPositions: [],
      allSquad: teamData.squad,
      showSquad: teamData.squad,
    }
  }

  componentDidMount() {
    this.getAllPositions(teamData);
  }

  getAllPositions = (teamData) => {
    let allPositionsId = [];
    let allPositions = teamData.squad.map((player)=> {
      if( allPositionsId.includes(player.position.id) ) {
        return false;
      } else {
        allPositionsId.push(player.position.id);
        return player.position;
      }
    })
    let getPositions = allPositions.filter((item)=> {
      return item !== false;
    })
  
    this.setState({
      allPositions: getPositions
    });
  }

  getOptionsItems = (items) => {
    return items.map(item=> (
      <option key={items.indexOf(item)} value={item.id}>
        {item.title}
      </option>
    ));
  };

  onChange = (event) => {
    if( Number(event.target.value) === 0) {
      this.setState({
        showSquad: this.state.allSquad
      })
    } else {
      let showSelectedPosition = [];
      this.state.allSquad.forEach((item)=> {
        if(item.position.id === Number(event.target.value)) {
          showSelectedPosition.push(item);
        } else {
          return false;
        }
      });
      this.setState({
        showSquad: showSelectedPosition
      })
    }
  }

  render() {
    return (
      <div className="squad col-12 d-flex flex-column px-0">
        <div className="squad-title col-12 d-flex justify-content-center align-items-center px-0 py-2">
          <h5>Состав</h5>
        </div>
        <div className="squad-filter col-12 d-flex justify-content-center align-items-center px-0 py-2">
          <SquadPositionFilter 
            allPositions={this.state.allPositions}
            getOptionsItems={this.getOptionsItems}
            onChange={this.onChange}
          />
        </div>
        <PlayersList 
          type={"squad"}
          quantity={this.state.showSquad.length}
          playersData={this.state.showSquad}
        />
      </div>
    )
  }
}

export default Squad;