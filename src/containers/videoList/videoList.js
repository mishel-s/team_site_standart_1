import React, { Component } from 'react';
import './styles.css';
import VideoItem from '../../components/videoItem/videoItem.js';

class VideoList extends Component {

  render() {
  const { quantity, videoData } = this.props;
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
}

export default VideoList;