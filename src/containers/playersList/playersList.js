import React, { Component } from 'react';
import './styles.css';
import PlayerCard from '../../components/playerCard/playerCard.js';
import PlayerCardShort from '../../components/playerCardShort/playerCardShort.js';

class PlayersList extends Component {
  
  render() {
    const { quantity, playersData, type } = this.props;
    return (
      <div className="playersList row col-12 px-0 mx-0">
        { playersData.length
          ? (playersData.slice(0, quantity)).map((player)=> (
              <div className="item px-0 d-flex align-items-center" key={player.id} id={player.id}>
                { type === "squadShort"
                    ? <PlayerCardShort
                        data={player}
                      />
                    : <PlayerCard
                        data={player}
                      />
                }
              </div>
            ))
          : <div className="not">
              <span>нет игроков</span>
            </div>
        }
      </div>
    )
  }
}

export default PlayersList;