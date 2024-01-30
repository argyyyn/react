import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    listItem: null
  }

  componentDidMount() {
    const {getData} = this.props

    getData()
      .then(listItem => this.setState({listItem}))
  }

  renderItems (arr) {
    return arr.map(({name, id}) =>
      <li key={id}
          onClick={() => this.props.onItemSelected(id)}
          className="list-group-item">{name}</li>
    )
  }

  render() {
    const {listItem} = this.state
    if (!listItem)
      return <Spinner/>

    const items = this.renderItems(listItem)

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
