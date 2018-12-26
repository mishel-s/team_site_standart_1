import React from 'react';

import PhotoItem from '../../components/PhotoItem';

import './styles.css';

export const PhotoList = ( {quantity, photoData} ) => {
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