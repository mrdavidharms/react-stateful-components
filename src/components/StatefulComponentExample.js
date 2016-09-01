// StatefulComponentExample.js
import React from 'react';

class StatefulComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      chillLevel: 'V V chill'
    };

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    this.setState({ clickCount: newClickCount});
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        <h1>Component Message: {this.props.message}</h1>
        <h1>Component Click Count: {this.state.clickCount}</h1>
        <h1>Component Chill Level: {this.state.chillLevel}</h1>
      </div>
    );
  }
};

export default StatefulComponentExample;
