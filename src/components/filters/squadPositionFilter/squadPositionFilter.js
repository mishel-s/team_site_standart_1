import React, { Component } from 'react';
import './styles.css';


class SquadPositionFilter extends Component {
  render() {
    const { allPositions, getOptionsItems, onChange } = this.props;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <label htmlFor="city">Позиция</label>
          <select 
            className="custom-select"
            id="position"
            name="position"
            onChange={onChange}
          >  
            <option key="0" value="0">Все позиции</option>
            {getOptionsItems(allPositions)}
          </select>
        </form>
      </div>
    )
  }
}

export default SquadPositionFilter;