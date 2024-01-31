import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from "../../services/swapi-service";
import Row from "../row";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render () {
    if (this.state.hasError)
      return <ErrorIndicator/>
    return this.props.children
  }
}

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError)
      return <ErrorIndicator />

    const itemList =
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {i => `${i.name} (${i.gender})`}
      </ItemList>


    const itemDetails = <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundary>

    return <Row left={itemList} right={itemDetails}/>
  }
}
