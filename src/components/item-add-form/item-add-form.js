import React, {Component} from "react";
import './item-add-form.css'

export default class ItemAddForm extends Component {
  state = {
    label: ''
  }

  onLabelChange = e => {
    this.setState({ label: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onItemAdd(this.state.label)
  }

  render () {
    return (
      <form className="item-add-form d-flex mt-3"
            onSubmit={this.onSubmit}>
        <input type="text"
               placeholder="What need to be done"
               className="form-control mr-1"
               onChange={this.onLabelChange}
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    )
  }
}