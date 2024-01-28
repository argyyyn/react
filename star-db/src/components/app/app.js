import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import './app.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
    swapiService = new SwapiService()

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

          <div className="row mb2">
              <div className="col-md-6">
                  <ItemList
                      getData={this.swapiService().getAllPlanets()}
                      onItemSelected={this.onPersonSelected}/>
              </div>
              <div className="col-md-6">
                  <PersonDetails personId={this.state.selectedPerson}/>
              </div>
          </div>
      </div>
    );
  }
}