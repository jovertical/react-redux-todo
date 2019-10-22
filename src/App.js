import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import VisibilityFilter from './components/VisibilityFilter'

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [filter, setFilter] = useState('all')
  const [message, setMessage] = useState('')

  const findTodo = id => todos.find(todo => todo.id === id)

  const handleFilterTodos = event => {
    event.preventDefault()

    setFilter(event.target.value)
    setMessage(`Currently displaying: "${event.target.value}" todos`)
  }

  const handleAddTodo = event => {
    event.preventDefault()

    setTodos(todos.concat({ id: Math.random(), title, completed: false, visible: true }))
    setMessage(`Added todo: ${title}`)
    setTitle('')
  }

  const handleCompleteTodo = id => {
    setTodos(todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    }))

    setMessage(`"${findTodo(id).title}" is set to: ${findTodo(id).completed ? 'incomplete' : 'complete'} `)
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  })

  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <div className="w-1/2 p-5 bg-white shadow-md">
        <form onSubmit={handleAddTodo} className="flex justify-end mb-5">
          <input type="text" name="title" className="d-block bg-transparent border-2 border-blue-400 text-gray-700 focus:outline-none py-1 px-3 mr-1" placeholder="Todo" value={title} onChange={event => setTitle(event.target.value)} />

          <button type="submit" className="bg-transparent border-2 border-blue-400 py-1 px-3 text-blue-400 focus:outline-none hover:text-white hover:bg-blue-400">
            Add
          </button>
        </form>

        {message && (
          <div className="py-1 px-3 mb-3 bg-blue-400 text-white text-center">
            <p>{message}</p>
          </div>
        )}

        <TodoList todos={todos} onToggleComplete={handleCompleteTodo} filter={filter} className="border-b-2 pb-3 mb-5" />

        <VisibilityFilter onFilter={handleFilterTodos} />
      </div>
    </div >
  );
}

export default App;
