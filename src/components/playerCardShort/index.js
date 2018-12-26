import React from 'react';

import defaultPlayer from '../../assets/img/players/default-player.gif';

import './styles.css';

export const PlayerCardShort = ( {data} ) => {
  return (
    <div className="playerCardShort">
      <div className="playerCardShort-content d-flex">
        <div className="photo">
          <img className="photoItem-img" src={(data.photo !== null) ? data.photo : defaultPlayer } alt={data.lastname} />
        </div>
        <div className="info d-flex flex-column px-1">
          <div className="info_name">
            {data.firstname} {data.lastname}
          </div>
          <div className="info_position">
            {data.position.title}
          </div>
          <div className="info_country">
            {data.country
              ? <img className="name_country" src={data.country} alt={"country"} />
              : ""
            }
          </div>
        </div>
      </div>
    </div>
  )
}