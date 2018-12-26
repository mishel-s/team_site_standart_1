import React from 'react';

import {PlayerCard} from '../../components/PlayerCard';
import {PlayerCardShort} from '../../components/PlayerCardShort';

import './styles.css';

export const PlayersList = ( {quantity, playersData, type} ) => {
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