import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({data}) => {
  const elements = data.map((item, index) => {
    return <li key={item.id} className="list-group-item"><TodoListItem {...item}/></li>
  })

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )
}

export default TodoList