import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

function AddTodo({ dispatch }) {
  let input

  const handleSubmit = event => {
    event.preventDefault()

    if (!input.value.trim()) {
      return
    }

    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-end mb-5">
      <input
        type="text"
        name="title"
        className="d-block bg-transparent border-2 border-blue-400 text-gray-700 focus:outline-none py-1 px-3 mr-1"
        placeholder="Todo"
        ref={node => (input = node)}
      />

      <button type="submit" className="bg-transparent border-2 border-blue-400 py-1 px-3 text-blue-400 focus:outline-none hover:text-white hover:bg-blue-400">
        Add
      </button>
    </form>
  )
}

export default connect()(AddTodo)