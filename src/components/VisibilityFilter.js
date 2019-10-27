import React from 'react'
import PropTypes from 'prop-types'

function VisibilityFilter({ className }) {
    return (
        <select {...className}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
    )
}

VisibilityFilter.propTypes = {
    className: PropTypes.string
}

export default VisibilityFilter