import React from "react";

const TodoListItem = ({label = 'argo', important = false}) => {
  const style = {
    color: important ? 'tomato' : 'black'
  }
  return <span className="todo-list-item" style={style}>{label}</span>
}

export default TodoListItem