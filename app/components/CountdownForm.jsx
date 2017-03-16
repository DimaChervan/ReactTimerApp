import React from 'react';

class CountdownForm extends React.Component {
  state = {
      time: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    const strTime = this.state.time;

    if (strTime.match(/^[0-9]*$/)) {
      this.setState({
        time: ''
      });
      this.props.onSetCountdown(parseInt(strTime, 10));
    }
  }

  onChange = (event) => {
    this.setState({
      time: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="countdown-form">
          <input
            type="text"
            placeholder="Enter time in seconds"
            value={this.state.time}
            onChange={this.onChange} />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

export default CountdownForm;
