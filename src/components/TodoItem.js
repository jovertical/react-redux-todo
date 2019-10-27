import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import * as todos from '../actions/todos'

function TodoItem({ todo, className }) {
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

TodoItem.propTypes = {
  todo: PropTypes.object,
  className: PropTypes.string
}

export default TodoItem