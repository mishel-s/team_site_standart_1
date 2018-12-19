import React, { Component } from 'react';
import './styles.css';
import defaultPlayer from '../../assets/img/players/default-player.gif';


class PlayerCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="playerCard">
        <svg className="playerCard-bg" width="150" height="195">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: "#C33764", stopOpacity: "1"}} />
              <stop offset="100%" style={{stopColor: "#1D2671", stopOpacity: "1"}} />
            </linearGradient>
          </defs>
          <path fill="url(#grad1)" stroke="rgb(84,73,182)" strokeWidth="2" d="
                M 15,2 135,2
                  c0,10 6.5,15 13,15 
                  v0,135 
                  c-21,25 -46,30 -66,30
                  c-7,5 -7,7 -7,8
                  c0,-1 0,-3 -7,-8
                  c-20,0 -45,-5 -66,-30
                  v0,-135
                  c6.5,0 13,-5 13,-15 
                L 15,2z
                "
          />
        </svg>
        <div className="playerCard-content">
          <div className="position">
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
          }
        </div>
      </div>
    )
  }
}

export default PlayerCard;