import { VisibilityFilters } from '../actions'
import * as actionTypes from '../actionTypes'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter

    default:
      return state
  }
}

export default visibilityFilter
