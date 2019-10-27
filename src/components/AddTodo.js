import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as todos from '../actions/todos'

function AddTodo() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(todos.addTodo(title))

    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-end mb-5">
      <input
        type="text"
        name="title"
        className="d-block bg-transparent border-2 border-blue-400 text-gray-700 focus:outline-none py-1 px-3 mr-1"
        placeholder="Todo"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <button type="submit" className="bg-transparent border-2 border-blue-400 py-1 px-3 text-blue-400 focus:outline-none hover:text-white hover:bg-blue-400">
        Add
      </button>
    </form>
  )
}

export default AddTodo