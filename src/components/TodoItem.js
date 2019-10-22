import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({ todo, onToggleComplete }) {
  return (
    <div className="border-b py-2 flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)} />

      <p className={`text-gray-700 ${todo.completed ? 'line-through' : ''}`}>
        {todo.title}
      </p>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onToggleComplete: PropTypes.func
}

export default TodoItem