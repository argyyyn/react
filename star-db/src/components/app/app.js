import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import './app.css';

export default class App extends Component {
  state = {
    hasError: true
  }


  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
    console.error('error', error)
    console.error('error info', errorInfo)
  }

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage/>
        <PeoplePage/>
      </div>
    );
  }
}