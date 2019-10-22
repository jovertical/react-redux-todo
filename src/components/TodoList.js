import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggleComplete, filter, className }) {
  let filteredTodos = []

  if (filter === 'completed') {
    filteredTodos = todos.filter(todo => todo.completed)
  } else if (filter === 'incomplete') {
    filteredTodos = todos.filter(todo => !todo.completed)
  } else {
    filteredTodos = todos
  }

  if (filteredTodos.length === 0) {
    return <p className={`text-gray-700 ${className}`}>Nothing to do, Add now...</p>
  }

  return (
    <div className={className}>
      {filteredTodos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleComplete: PropTypes.func,
  filter: PropTypes.oneOf(['all', 'completed', 'incomplete']),
  className: PropTypes.string
}

export default TodoList