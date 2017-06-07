import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Created By: <a target="_blank" href="https://joshfjohnston.com">Josh Johnston</a> for <a target="_blank" href="https://www.freecodecamp.com">FCC</a> - <a target="_blank" href="https://www.freecodecamp.com/challenges/build-a-random-quote-machine">Challenge</a>
        </p>
      </footer>
    );
  }
}
