import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleAddTodo = event => {
    event.preventDefault()

    setTodos(todos.concat({ title, completed: false }))
    setMessage(`Added todo: ${title}`)
    setTitle('')
  }

  const handleCompleteTodo = index => {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    }))

    setMessage(`"${todos[index].title}" is set to: ${todos[index].completed ? 'incomplete' : 'complete'} `)
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

        {todos.length === 0 ? <p className="text-gray-700">Nothing to do, Add now...</p> : (
          <div>
            {todos.map((todo, i) => (
              <div key={i} className="border-b py-2 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={todo.completed}
                  onChange={() => handleCompleteTodo(i)} />

                <p className="text-gray-700">
                  {todo.title}
                </p>
              </div>
            ))}
          </div>)}
      </div>
    </div >
  );
}

export default App;
