import React from 'react'
import PropTypes from 'prop-types'

function VisibilityFilter({ onFilter, className }) {
    return (
        <select {...className} onChange={event => onFilter(event)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
    )
}

VisibilityFilter.propTypes = {
    onFilter: PropTypes.func,
    className: PropTypes.string
}

export default VisibilityFilter