import React, {Component} from "react";
import './item-add-form.css'

export default class ItemAddForm extends Component {

   render () {
    const {onItemAdd} = this.props

    return (
      <div className="item-add-form">
        <button onClick={() => onItemAdd('argo')} className="btn btn-outline-secondary mt-3">Add item</button>
      </div>
    )
  }
}