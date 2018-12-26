import React from 'react';

import {PhotoList} from '../../containers/PhotoList';
import { teamData } from '../../api/teamData.js';

import './styles.css';

export const MediaPhoto = () => {
  return (
    <div className="col-12 d-flex flex-column px-0 photosPage">
      <div className="col-12 d-flex justify-content-center align-items-center px-0 py-2 s-photo-title">
        <h5>Фото</h5>
      </div>
      <PhotoList 
        quantity={teamData.photos.length}
        photoData={teamData.photos}
      />
    </div>
  )
}