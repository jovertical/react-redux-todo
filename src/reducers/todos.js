import * as actionTypes from '../actionTypes'

export default (todos = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return todos.concat({ id: Math.random(), title: payload.title, completed: false })

    case actionTypes.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id !== payload.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })

    default:
      return todos
  }
}