import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Countdown extends React.Component {
  state = {
      count: 0
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds
    });
  }

  render() {
    return (
      <div>
        <Clock totalSeconds={this.state.count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
};

export default Countdown;
