import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { VisibilityFilters, setVisibilityFilter } from '../actions'

function VisibilityFilter({ dispatch, className }) {
  return (
    <select {...className} onChange={event => dispatch(setVisibilityFilter(event.target.value))}>
      <option value={VisibilityFilters.SHOW_ALL}>All</option>
      <option value={VisibilityFilters.SHOW_COMPLETED}>Completed</option>
      <option value={VisibilityFilters.SHOW_ACTIVE}>Active</option>
    </select>
  )
}

VisibilityFilter.propTypes = {
  className: PropTypes.string
}

export default connect()(VisibilityFilter)