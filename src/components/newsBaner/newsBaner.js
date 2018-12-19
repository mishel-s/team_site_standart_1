import React, { Component } from 'react';
import './styles.css';
import {withRouter} from 'react-router-dom';

class NewsBaner extends Component {
  
  //обрезаем строку, если к-во символов больше 70
  cutString = (string) => {
    if(string.length > 70) {
      return string.substr(0, 70) + "...";
    } else { return string}
  }

  render() {
    const { publications} = this.props;
    return (  
      <div className="NewsBaner row mx-0">       
        <div className="col-8 d-flex flex-row px-0">
          <div id="carouselExampleIndicators" className="carousel slide w-100" data-ride="carousel" data-interval="100000">
            <ol className="carousel-indicators d-none d-md-flex ci-position">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" onClick={()=> { this.props.history.push('/news/' + publications[0].id) }}>
                <img className="d-block w-100" src={publications[0].image} alt={publications[0].title} />
                <div className="bblock"></div>
                <div className="carousel-caption cc-position">
                  <h5>{ this.cutString(publications[0].title) }</h5>
                </div>
              </div>
              <div className="carousel-item" onClick={()=> { this.props.history.push('/news/' + publications[1].id) }}>
                <img className="d-block w-100" src={publications[1].image} alt={publications[1].title} />
                <div className="bblock"></div>
                <div className="carousel-caption cc-position">
                  <h5>{ this.cutString(publications[1].title) }</h5>
                </div>
              </div>
              <div className="carousel-item" onClick={()=> { this.props.history.push('/news/' + publications[2].id) }}>
                <img className="d-block w-100" src={publications[2].image} alt={publications[2].title} />
                <div className="bblock"></div>
                <div className="carousel-caption cc-position">
                  <h5>{ this.cutString(publications[2].title) }</h5>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-4 d-flex flex-column px-0">
          <img className="d-block w-100" style={{height: "50%"}} src={publications[3].image} alt={publications[4].title} onClick={()=> { this.props.history.push('/news/' + publications[3].id) }} />
          <img className="d-block w-100" style={{height: "50%"}} src={publications[4].image} alt={publications[5].title} onClick={()=> { this.props.history.push('/news/' + publications[4].id) }} />
        </div>
      </div>
    )
  }
}

export default withRouter(NewsBaner);