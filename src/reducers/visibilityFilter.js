import { VisibilityFilters } from '../actions'
import * as actionTypes from '../actionTypes'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return payload.filter

    default:
      return state
  }
}

export default visibilityFilter
