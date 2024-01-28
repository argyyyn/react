import React, {Component} from "react";
import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class PeoplePage extends Component{
    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        if (this.setState.hasError)
            return <h1>We have error in app</h1>

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                      getData={this.swapiService.getAllPeople}
                      onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}