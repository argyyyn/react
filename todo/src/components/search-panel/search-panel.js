import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component{
  state = {
    term: ''
  }

  onSearchChange = e => {
    const term = e.target.value
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  render () {
    return (
      <input type="text"
             onChange={this.onSearchChange}
             value={this.state.term}
             className="form-control search-input"
             placeholder="type to search" />
    )

  }
};