import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';


import './app.css';
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header/>

            <PersonDetails itemId={10}/>
            <PlanetDetails itemId={5}/>
            <StarshipDetails itemId={9}/>

            <PersonList/>
            <StarshipList/>
            <PlanetList/>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
