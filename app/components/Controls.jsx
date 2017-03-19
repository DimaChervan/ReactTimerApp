import React from 'react';

class Controls extends React.Component {
  render () {
    return (
      <div className="controls">
        this.props.countDownStatus === 'started'
          ? <button className="button secondary">Pause</button>
          : <button className="button primary">Start</button>
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countDownStatus: React.PropTypes.string.isRequired
};

export default Controls;
