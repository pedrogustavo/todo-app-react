import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

function ListItem ({ item, toggleCompleted }) {
  return (
    <li className={`list-item ${item.completed && 'completed'}`} onClick={() => toggleCompleted(item.id)}>
        <Icon completed={item.completed} />
        <p>{ item.value }</p>
    </li>
  )
}

ListItem.propTypes = {
    item: PropTypes.object,
    toggleCompleted: PropTypes.func
}

export default ListItem
