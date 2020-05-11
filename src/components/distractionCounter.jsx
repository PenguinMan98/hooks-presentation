import React, {Component} from 'react';

class DistractionCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        Number of Distractions today:
        <button onClick={this.incrementCount}>{this.state.count}</button>
      </div>
    );
  }
}

export default DistractionCounter;