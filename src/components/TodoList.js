import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

function TodoList({ className, todos, toggleTodo }) {
  if (todos.length === 0) {
    return <p className={`text-gray-700 ${className}`}>Nothing to do, Add now...</p>
  }

  return (
    <div className={className}>
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  className: PropTypes.string
}

export default TodoList