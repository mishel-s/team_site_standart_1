import React, { Component } from 'react';
import './styles.css';
import VideoList from '../../containers/videoList/videoList.js';
import { teamData } from '../../api/teamData.js';

class MediaVideo extends Component {
  render() {
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
}

export default MediaVideo;