import React from 'react'
import PropTypes from 'prop-types'

function Filter({ className }) {
    return (
        <select {...className}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
    )
}

Filter.propTypes = {
    className: PropTypes.string
}

export default Filter