import React, { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = { thetime: new Date().toLocaleTimeString() };
    setInterval(this.tick, 1000);
  }

  tick = () => {
    const newTime = new Date().toLocaleTimeString();
    this.setState({
      thetime: newTime
    });
  };

  render() {
    const { thetime } = this.state;
    return <h3>Time: {thetime}</h3>;
  }
}
