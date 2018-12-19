import React, { Component } from 'react';
import './styles.css';

class BigItemOnPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexOfCurentPhoto: props.indexPhoto,
      bigImage: props.item,
    }
  }

  prevPhoto = (photoData, curentPhotoIndex) => {
    let prevIndexOfPhoto = --curentPhotoIndex;
    this.setState({
      indexOfCurentPhoto: prevIndexOfPhoto,
      bigImage: photoData[prevIndexOfPhoto]
    })
  }

  nextPhoto = (photoData, curentPhotoIndex) => {
    let prevIndexOfPhoto = ++curentPhotoIndex;
    this.setState({
      indexOfCurentPhoto: prevIndexOfPhoto,
      bigImage: photoData[prevIndexOfPhoto]
    })
  }

  render() {
    const { photoData, item, indexPhoto, showBigImage, toggleShowBigImage } = this.props;
    return(
      <div className="block" style={{ display: showBigImage}}>
        <div className="block-bg"></div>
        { this.state.indexOfCurentPhoto > 0
            ? <div className="prevArrow" onClick={()=>{ this.prevPhoto(photoData, this.state.indexOfCurentPhoto) }}>&#8249;</div>
            : true
        }
        <div className="bigItem">
          <img className="bigImage" 
            src={(this.state.bigImage.image !== null) ? this.state.bigImage.image : 'logo' }
            alt={this.state.bigImage.name} 
            onClick={ ()=> {
              toggleShowBigImage(); 
              this.setState({ indexOfCurentPhoto: indexPhoto, bigImage: item })
            } }
          /> 
        </div>
        { this.state.indexOfCurentPhoto < photoData.length-1
            ? <div className="nextArrow" onClick={()=>{ this.nextPhoto(photoData, this.state.indexOfCurentPhoto) }}>&#8250;</div>
            : true
        }
      </div>
    )
  }
}

export default BigItemOnPage;