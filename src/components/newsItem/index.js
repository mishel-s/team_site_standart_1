import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {BtShare} from '../BtShare';

import './styles.css';

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareList: 'none',
    }
  }

  toggleShareList = () => {
    this.setState({
      shareList: (this.state.shareList === 'none') ? 'flex' : 'none',
    });
  }

  cutString = (string) => {
    if(string.length > 70) {
      return string.substr(0, 70) + "...";
    } else { return string}
  }

  render() {
    const { data, publications } = this.props;
    return (
      <React.Fragment>
        <NavLink to={'/news/' + data.id}>
          <img className="card-img-top" src={data.image} alt={data.title} />
        </NavLink>
        <div className="card-body" onClick={()=> { this.props.history.push('/news/' + data.id) }} >
          <h5 className="card-title" >{ this.cutString(data.title) }</h5>
          <p className="card-text">{data.shortDescription}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted col-10 px-0">Last updated {data.lastUpdated}</small>
          <BtShare 
            data={data} 
            toggleShareList={this.toggleShareList} 
            publications={publications}
          />
          <div className="shareList col-12 px-1 flex-column align-items-center" style={{ display: this.state.shareList }}>
            <div className="col-12 col-md-11 px-0 shareList-bg"></div>
            <div className="shareList-bgArrow"></div>
            <div className="d-flex justify-content-center py-1 faceb">
            {/*<iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&mobile_iframe=true&appId=624719444540895&width=138&height=20"  title={'unique'} style={{ width: "100", height: "20", border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>*/}
              <div className="fb-share-button" 
                    data-href={data.link} 
                    data-layout="button_count" 
                    data-size="small" 
                    data-mobile-iframe="true"
              >
                <a target="_blank"
                    rel="noopener noreferrer"
                    className="fb-xfbml-parse-ignore">Поделиться</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(NewsItem);