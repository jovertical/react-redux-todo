import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    if (props.todos.length === 0) {
        return <p className="text-gray-700">Nothing to do, Add now...</p>
    }

    return (
        <div>
            {props.todos.map((todo, i) => (
                <TodoItem key={i} todo={todo} onToggleComplete={props.onToggleComplete} />
            ))}
        </div>
    )
}

export default TodoList