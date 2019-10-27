import React from 'react'
import PropTypes from 'prop-types'

function Todo({ todo, toggleTodo, className }) {
  return (
    <div className={`py-2 flex items-center ${className}`}>
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)} />

      <p className={`text-gray-700 ${todo.completed ? 'line-through' : ''}`}>
        {todo.title}
      </p>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  toggleTodo: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default Todo