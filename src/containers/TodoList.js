import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import TodoItem from '../components/TodoItem'

function TodoList({ className }) {
  const todos = useSelector(state => state.todos)

  if (todos.length === 0) {
    return <p className={`text-gray-700 ${className}`}>Nothing to do, Add now...</p>
  }

  return (
    <div className={className}>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  className: PropTypes.string
}

export default TodoList