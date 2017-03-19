import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

class Countdown extends React.Component {
  state = {
      count: 0,
      countdownStatus: 'stopped'
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          this.clearTimer();
          break;
      }
    }
  }

  componentWillUnmount () {
    this.clearTimer();
  }

  clearTimer () {
    clearInterval(this.timer);
    this.timer = null;
  }

  startTimer () {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount: 0
      });

      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }

    }, 1000);
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      countdownStatus: newStatus
    });
  }

  render () {
    const { count, countdownStatus } = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls
          countDownStatus={countdownStatus}
          onStatusChange={this.handleStatusChange} />;
      }

      return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
};

export default Countdown;
