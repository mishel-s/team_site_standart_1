import React from 'react';

import {VideoList} from '../../containers/VideoList';
import { teamData } from '../../api/teamData.js';

import './styles.css';

export const MediaVideo = () => {
  return (
    <div className="videoPage col-12 d-flex flex-column px-0">
      <div className="s-video-title col-12 d-flex justify-content-center align-items-center px-0 py-2">
        <h5>Видео</h5>
      </div>
      <VideoList 
        quantity={teamData.videos.length}
        videoData={teamData.videos}
      />
    </div>
  )
}