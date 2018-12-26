import React, { Component } from 'react';

class Test extends Component {
  сomponentDidMount() {
    console.log('didmountTestComponent')
  }
  render() {
    return (
      <div>
          Test component
      </div>
    )
  }
}

export default Test;