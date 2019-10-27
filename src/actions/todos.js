import * as actionTypes from '../actionTypes'

export const addTodo = title => ({
  type: actionTypes.ADD_TODO,
  payload: {
    title
  }
})

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  payload: {
    id
  }
})