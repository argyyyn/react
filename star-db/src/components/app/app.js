import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import { Record } from '../item-details/item-details'

import './app.css'
import SwapiService from '../../services/swapi-service'
import ItemDetails from '../item-details'
import Row from '../row'

export default class App extends Component {
	swapiService = new SwapiService()

	state = {
		showRandomPlanet: true,
		hasError: false,
	}

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet,
			}
		})
	}

	componentDidCatch() {
		this.setState({ hasError: true })
	}

	render() {
		const { getPerson, getStarship, getPersonImage, getStarshipImage } =
			this.swapiService

		if (this.state.hasError) {
			return <ErrorIndicator />
		}

		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

		const personDetails = (
			<ItemDetails getData={getPerson} getImageUrl={getPersonImage} itemId={11}>
				<Record field="gender" label="Gender" />
			</ItemDetails>
		)

		const starshipDetails = (
			<ItemDetails
				getData={getStarship}
				getImageUrl={getStarshipImage}
				itemId={5}
			></ItemDetails>
		)

		return (
			<div className="stardb-app">
				<Header />
				{planet}

				<div className="row mb2 button-row">
					<button
						className="toggle-planet btn btn-warning btn-lg"
						onClick={this.toggleRandomPlanet}
					>
						Toggle Random Planet
					</button>
					<ErrorButton />
				</div>

				<Row left={personDetails} right={starshipDetails}></Row>

				{/*<PeoplePage />*/}

				{/*<div className="row mb2">*/}
				{/*  <div className="col-md-6">*/}
				{/*    <ItemList*/}
				{/*      onItemSelected={this.onPersonSelected}*/}
				{/*      renderItem={item => <span>{item.name} <button className="btn btn-outline-primary">!</button></span>}*/}
				{/*      getData={this.swapiService.getAllPlanets} />*/}
				{/*  </div>*/}
				{/*  <div className="col-md-6">*/}
				{/*    <PersonDetails personId={this.state.selectedPerson} />*/}
				{/*  </div>*/}
				{/*</div>*/}

				{/*<div className="row mb2">*/}
				{/*  <div className="col-md-6">*/}
				{/*    <ItemList*/}
				{/*      renderItem={item => item.name}*/}
				{/*      onItemSelected={this.onPersonSelected}*/}
				{/*      getData={this.swapiService.getAllStarships} />*/}
				{/*  </div>*/}
				{/*  <div className="col-md-6">*/}
				{/*    <PersonDetails personId={this.state.selectedPerson} />*/}
				{/*  </div>*/}
				{/*</div>*/}
			</div>
		)
	}
}
