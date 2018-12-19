import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/img/logo/logo-odessa.png';

class VideoItem extends Component {
render() {
  const { data } = this.props;
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={(data.video !== null) ? data.video : logo } title={data.name} allowFullScreen></iframe>
    </div>
  )
}
}

export default VideoItem;