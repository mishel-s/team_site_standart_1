import React, { Component } from 'react';

import logo from '../../assets/img/logo/logo-odessa.png';
import { teamData } from '../../api/teamData.js';

import './styles.css';

class PublicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publicationId: props.match.params.id,
      publicationInfo: [],
    }
  }
  
  componentDidMount() {
    this.getPublicationInfo(teamData.publications, this.state.publicationId);  
  }

  getPublicationInfo = (publications, id) => {
    let publicationInfo = publications.filter((publication)=> {
      return publication.id === Number(id);
    })
    this.setState({
      publicationInfo: publicationInfo
    })
  }
  render() {
    return (
      this.state.publicationInfo.length
        ? <div className="container publicationPage col-12 px-0 px-1 py-4">
            <div className="publicationPage_title col-12 d-flex justify-content-center align-items-center">
              <h1>{this.state.publicationInfo[0].title}</h1>
            </div>
            <div className="publicationPage_otherTop col-12 px-1">
              {this.state.publicationInfo[0].lastUpdated}
            </div>
            <div className="publicationPage_main col-12 d-flex flex-column align-items-center">
              <div className="publicationPage_main__img col-12 col-md-8 m-2">
                <img src={(this.state.publicationInfo[0].image !== null) ? this.state.publicationInfo[0].image : logo } alt={this.state.publicationInfo[0].title} />
              </div>
              {
                this.state.publicationInfo[0].shortDescription
                ? <div className="publicationPage_main__shortDescription col-12 col-md-8 mb-2">
                    {this.state.publicationInfo[0].shortDescription}
                  </div>
                : true
              }
              {
                this.state.publicationInfo[0].publication
                ? <div className="publicationPage_main__publication col-12">
                    {this.state.publicationInfo[0].publication} 
                  </div>
                : true
              }
            </div>
            <div className="publicationPage_otherBottom col-12 px-1">
              {this.state.publicationInfo[0].link}
            </div>
          </div>
        : <div className="container publicationPage col-12 px-0 py-1">spiner</div>
    )
  }
}

export default PublicationPage;