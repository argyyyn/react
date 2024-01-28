import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props

    getData()
        .getAllPeople()
        .then(itemList => {
          this.setState({ itemList })
        })
  }

  renderItems (arr) {
    return arr.map(({name, id}) =>
      <li key={id}
          onClick={() => this.props.onItemSelected(id)}
          className="list-group-item">{name}</li>
    )
  }

  render() {
    const {itemList} = this.state
    if (!itemList)
      return <Spinner/>

    const items = this.renderItems(itemList)

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
