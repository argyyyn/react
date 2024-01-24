import React, {Component} from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import ItemAddForm from "../item-add-form";

export default class App extends Component {
  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Make Awesome app'),
      this.createTodoItem('Have a lunch'),
    ]
  }

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = id => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(el => el.id === id)
      return {todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]}
    })
  }

  onToggleImportant = id => {
    this.setState(() => {
      this.setState(({todoData}) => {
        const idx = todoData.findIndex(el => el.id === id)

      })
    })
  }

  onToggleDone = id => {
    console.log('toggle done', id)
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({todoData}) => {
      return { todoData: [...todoData, newItem] }
    })
  }

  render () {
    const {todoData} = this.state

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={id => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
};