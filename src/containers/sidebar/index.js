import React from 'react';
import {NavLink} from 'react-router-dom';

import {SquadShort} from '../SquadShort';
import {SquadShortSecond} from '../SquadShortSecond';
import {PhotoList} from '../PhotoList';
import {VideoList} from '../VideoList';

import './styles.css';

export const Sidebar = ({ teamData: { photos, videos, squad } }) => {
  return (
    <aside className="col-12 col-md-4 order-md-1 px-1 pr-md-2 align-items-center">
      <SquadShort 
        squad={squad}
      />
      <div className="col-12 px-0 my-3 s-photoShortList">  
        <div className="d-flex justify-content-center s-photo-title">
          <h5>Фото ({photos.length})</h5>
        </div>
        <div className="d-flex flex-column p-1 s-photoListBlock">
          <PhotoList 
            quantity={4}
            photoData={photos}
          />
          <NavLink to="/media/photo" className="d-flex justify-content-center align-items-center mt-2 mb-1 bt-photoListLink">
            все фотографии
          </NavLink>
        </div>
      </div>
      <SquadShortSecond
        squad={squad}
      />
      <div className="col-12 px-0 my-3 s-videoShortList">
        <div className="d-flex justify-content-center s-video-title">
          <h5>Видео ({videos.length})</h5>
        </div>
        <div className="d-flex flex-column p-1 s-videoListBlock">
          <VideoList 
            quantity={2}
            videoData={videos}
          />
          <NavLink to="/media/video" className="d-flex justify-content-center align-items-center mt-2 mb-1 bt-videoListLink">
            все видео
          </NavLink>
        </div>
      </div>
    </aside>
  )
}