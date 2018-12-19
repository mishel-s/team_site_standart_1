import React, { Component } from 'react';
import './styles.css';
import PhotoItem from '../../components/photoItem/photoItem.js';

class PhotoList extends Component {
  toggleBigImage = (originalImgLink, originalImgName) => {
    console.log('1');
    this.setState({ 
      bigImage: (this.state.bigImage === 'none') ? 'flex' : 'none',
      originalImgLink: originalImgLink,
      originalImgName: originalImgName,
      })
  }

  render() {
    const { quantity, photoData } = this.props;
    return (
      <div className="s-photoList row col-12 px-0 mx-0">
        { photoData.length
          ? (photoData.slice(0, quantity)).map((photo)=> (
              <div className="photoItem px-0 d-flex align-items-center" key={photo.id} id={photo.id}>
                <PhotoItem
                  indexPhoto={photoData.indexOf(photo)}
                  data={photo}
                  photoData={photoData}
                />
              </div>
            ))
          : <span>нет фото</span>
        }
      </div>
    )
  }
}

export default PhotoList;