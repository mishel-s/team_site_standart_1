import React, { Component } from 'react';
import './styles.css';
import defaultPlayer from '../../assets/img/players/default-player.gif';


class PlayerCardShort extends Component {
  render() {
    const { data } = this.props;
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
          
          {/*<div className="position">
            {data.position.title}
          </div>
          <div className="info_photo">
            <div className="shortInfo">
              {data.country
                ? <img className="name_country" src={data.country} alt={"country"} />
                : ""
              }
            </div>
            <div className="photo">
              <img className="photoItem-img" src={(data.photo !== null) ? data.photo : defaultPlayer } alt={data.lastname} />
            </div>
          </div>
          <div className="name">
            <div className="name_info">
              {data.firstname} {data.lastname}
            </div>
          </div>
          { data.characteristics
            ? <div className="characteristics">
                {data.characteristics}
              </div>
            : ""
          }*/}
        </div>
      </div>
    )
  }
}

export default PlayerCardShort;