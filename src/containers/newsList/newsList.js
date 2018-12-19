import React, { Component } from 'react';
import './styles.css';
import NewsItem from '../../components/newsItem/newsItem.js';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notActiveItemsShareList: [],
    }
  }

  arrNotActiveItemsShareList = (publications, notActiveItemId) => {
    const NotActiveItemsShareList = publications.filter((publication) => { if(publication.id !== notActiveItemId) return true })
    console.log(NotActiveItemsShareList);
    this.setState({
      notActiveItemsShareList: NotActiveItemsShareList,
    })
    return NotActiveItemsShareList;
  }

  render() {
    const { publications, quantity } = this.props;
    return (
      <div className="row mx-0">
        { publications.length
          ? (publications.slice(0, quantity)).map((publication)=> (
              <div className="card px-0 mx-1 my-1 publicationCard" key={publication.id} id={publication.id}>
                <NewsItem
                  notActiveItemsShareList={this.state.notActiveItemsShareList}
                  arrNotActiveItemsShareList={this.arrNotActiveItemsShareList}
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
}

export default NewsList;