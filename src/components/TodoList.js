import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggleComplete }) {
  if (todos.length === 0) {
    return <p className="text-gray-700">Nothing to do, Add now...</p>
  }

  return (
    <div>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleComplete: PropTypes.func
}

export default TodoList