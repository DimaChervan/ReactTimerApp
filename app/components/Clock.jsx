import React from 'react';

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

class Clock extends React.Component {
  formatSeconds (totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    seconds = formatTime(seconds);
    minutes = formatTime(minutes);

    return `${minutes}:${seconds}`;
  }

  render () {
    const { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.defaultProps = {
  totalSeconds: 0
};

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
};

export default Clock;
