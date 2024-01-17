import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./components/app-header"
import SearchPanel from "./components/search-panel"
import TodoList from "./components/todo-list/todo-list"
import TodoStatusFilter from "./components/item-status-fitler/todo-status-filter";

const App = () => {

  const todoData = [
    {label: 'drink coffee', important: false, id: 1},
    {label: 'play auto chess', important: true, id: 2},
  ]

  return (
    <div>
      <div className="d-flex space-between">
        <AppHeader/>
      </div>
      <div className="d-flex space-between">
        <SearchPanel/>
        <TodoStatusFilter/>
      </div>

      <TodoList data={todoData}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))