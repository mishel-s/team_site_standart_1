import React from 'react';

import {VideoItem} from '../../components/VideoItem';

import './styles.css';

export const VideoList = ( {quantity, videoData} ) => {
  return (
    <div className="s-videoList col-12 px-0">
      { videoData.length
        ? (videoData.slice(0, quantity)).map((video)=> (
            <div className="videoItem px-0" key={video.id} id={video.id}>
              <VideoItem
                data={video}
              />
            </div>
          ))
        : <span>нет видео</span>
      }
    </div>
  )
}