import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";
import {withSwapiService} from '../hoc-helper'

const PersonDetails = ({ itemId }) => {
  return (
    ({getPerson, getPersonImage}) => <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

const PlanetDetails =  ({ itemId }) => {
  return (
      <SwapiServiceConsumer>
          {
              ({getPlanet, getPlanetImage}) => <ItemDetails
                  itemId={itemId}
                  getData={getPlanet}
                  getImageUrl={getPlanetImage}>

                  <Record field="population" label="Population" />
                  <Record field="rotationPeriod" label="Rotation Period" />
                  <Record field="diameter" label="Diameter" />
              </ItemDetails>
          }
      </SwapiServiceConsumer>

  )
}

const StarshipDetails =  ({ itemId }) => {
  return (
      <SwapiServiceConsumer>
          {
              ({getStarship, getStarshipImage}) => <ItemDetails
                  itemId={itemId}
                  getData={getStarship}
                  getImageUrl={getStarshipImage}>

                  <Record field="model" label="Model" />
                  <Record field="length" label="Length" />
                  <Record field="costInCredits" label="Cost" />
              </ItemDetails>
          }
      </SwapiServiceConsumer>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}