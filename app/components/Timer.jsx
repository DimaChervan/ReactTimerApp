import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {
  state = {
      count: 0,
      timerStatus: 'stopped'
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          this.handleStop();
          break;
      }
    }
  }

  componentWillUnmount () {
    this.handleStop();
  }

  handleStop () {
    clearInterval(this.timer);
    this.timer = null;
  }

  handleStart () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  handleStatusChange = (newTimerStatus) => {
    this.setState({
      timerStatus: newTimerStatus
    });
  }

  render () {
    const { count, timerStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countDownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}

export default Timer;
