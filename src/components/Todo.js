import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import * as todos from '../actions/todos'

function Todo({ todo, className }) {
  const dispatch = useDispatch()

  return (
    <div className={`py-2 flex items-center ${className}`}>
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.completed}
        onChange={() => dispatch(todos.toggleTodo(todo.id))} />

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
  className: PropTypes.string
}

export default Todo