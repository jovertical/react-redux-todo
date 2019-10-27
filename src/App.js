import React from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <div className="w-1/2 p-5 bg-white shadow-md">
        <AddTodo />

        <TodoList className="border-b-2 pb-3 mb-5" />
      </div>
    </div >
  );
}

export default App;
