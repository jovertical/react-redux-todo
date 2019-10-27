import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import VisibilityFilter from './containers/VisibilityFilter'

function App() {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <div className="w-1/2 p-5 bg-white shadow-md">
        <AddTodo />

        <VisibleTodoList className="border-b-2 pb-3 mb-5" />

        <VisibilityFilter />
      </div>
    </div >
  );
}

export default App;
