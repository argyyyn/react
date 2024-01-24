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
    ],
    term: ''
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

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id)
    const oldItem = arr[idx]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

    onToggleImportant = id => {
      this.setState(({todoData}) => {
        return { todoData: this.toggleProperty(todoData, id, 'important') }
      })
    }

  onToggleDone = id => {
    this.setState(({todoData}) => {
      return { todoData: this.toggleProperty(todoData, id, 'done') }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({todoData}) => {
      return { todoData: [...todoData, newItem] }
    })
  }

  search (items, term) {
    if (term.length === 0) return items
    return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }

  onSearchChange = term => {
    this.setState({ term })
  }

  render () {
    const {todoData, term} = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount
    const visibleItems = this.search(todoData, term)

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={id => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
};