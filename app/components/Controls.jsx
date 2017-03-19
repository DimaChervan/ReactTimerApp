import React from 'react';

class Controls extends React.Component {
  onStatusChange = (newStatus) => {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }

  render () {
    const renderStartStopButtons = () => {
        const { countDownStatus } = this.props;

        if (countDownStatus === 'started') {
          return <button
            className="button secondary"
            onClick={this.onStatusChange('paused')}>Pause</button>;
        }

        return <button
          className="button primary"
          onClick={this.onStatusChange('started')}>Start</button>;
    };

    return (
      <div className="controls">
            {renderStartStopButtons()}
            <button
              className="button alert hollow"
              onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countDownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;
