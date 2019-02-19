// @flow
import React, { Component } from 'react';
import Clock from './Clock';
import Buses from './Buses';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.topcontainer}>
          <Clock />
        </div>
        <div className={styles.toprightcontainer}>
          <Buses />
        </div>
        <div className={styles.container} data-tid="container">
          <h2>
            The voice inside your head that says you can’t do this is a liar.
          </h2>
        </div>
      </div>
    );
  }
}
