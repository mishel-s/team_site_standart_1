import React, { Component } from 'react';
import './styles.css';

class BtShare extends Component {
  render() {
    const { data, toggleShareList, publications, arrNotActiveItemsShareList, notActiveItemsShareList, setNoneSharelist } = this.props;
    return (
      <div className="btShare" onClick={()=> {setNoneSharelist(arrNotActiveItemsShareList(publications, data.id), data.id, toggleShareList)}}>
        <div className="btShare-lineTop"></div>
        <div className="btShare-left">
          <div className="btShare-circle"></div>
        </div>
        <div className="btShare-rigth">
          <div className="btShare-circle"></div>
          <div className="btShare-circle"></div>
        </div>
        <div className="btShare-lineBottom"></div>
      </div>
    )
  }
}

export default BtShare;