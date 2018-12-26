import React from 'react';

import NewsItem from '../../components/NewsItem';

import './styles.css';

export const NewsList = ( {publications, quantity} ) => {
  return (
    <div className="row mx-0">
      { publications.length
        ? (publications.slice(0, quantity)).map((publication)=> (
            <div className="card px-0 mx-1 my-1 publicationCard" key={publication.id} id={publication.id}>
              <NewsItem 
                data={publication}
                publications={publications}
              />
            </div>
          ))
        : <span>нет новостей</span>
      }
    </div>
  )
}