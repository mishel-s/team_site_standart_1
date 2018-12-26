import React, { Component } from 'react';

import logo from '../../assets/img/logo/logo-odessa.png';
import BigItemOnPage from '../BigItemOnPage';

import './styles.css';

class PhotoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBigImage: 'none',
    }
  }

  toggleShowBigImage = () => {
    this.setState({
      showBigImage: (this.state.showBigImage === 'none') ? 'flex' : 'none',
    });
  }

  render() {
    const { data, photoData, indexPhoto } = this.props;
    return (
      <React.Fragment>
        <img className="photoItem-img" onClick={()=>{this.toggleShowBigImage()}} src={(data.image !== null) ? data.image : logo } alt={data.name} />
        <BigItemOnPage 
          item={data}
          photoData={photoData}
          indexPhoto={indexPhoto}
          showBigImage={this.state.showBigImage} 
          toggleShowBigImage={this.toggleShowBigImage}
        />
      </React.Fragment>
    )
  }
}

export default PhotoItem;