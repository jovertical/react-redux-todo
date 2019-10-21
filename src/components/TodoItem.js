import React from 'react'

function TodoItem(props) {
  return (
    <div className="border-b py-2 flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={props.todo.completed}
        onChange={() => props.onToggleComplete(props.todo.id)} />

      <p className="text-gray-700">
        {props.todo.title}
      </p>
    </div>
  )
}

export default TodoItem