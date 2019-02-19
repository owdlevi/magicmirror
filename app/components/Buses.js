import React, { Component } from 'react';

const tflAPI = `https://api.tfl.gov.uk/StopPoint/490008639S/Arrivals?app_id=148f05be&app_key=8b44832fbd2a54ed62ab322b92ae26da`;

export default class Buses extends Component {
  constructor() {
    super();
    this.state = { buses: [] };
  }

  updateBus = () => {
    const newTime = new Date().toLocaleTimeString();
    this.setState({
      buses: newTime
    });
  };

  componentDidMount() {
    fetch(tflAPI)
      .then(res => res.json())
      .then(json => {
        // sort by value
        json.sort((a, b) => a.expectedArrival - b.expectedArrival);
        return this.setState({ buses: json })
      })
      .catch();
  }

  render() {
    const { buses } = this.state;
    console.log(buses);
    const busList = buses.map(bus => <div key={bus.id}>{bus.lineName}</div>);
    return <div>{busList}</div>;
  }
}
