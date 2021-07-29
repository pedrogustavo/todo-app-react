import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

function ListItem ({ item, toggleCompleted, removeItem }) {
  return (
    <li className={`list-item ${item.completed && 'completed'}`}>
        <div className="list-item-content" onClick={() => toggleCompleted(item.id)}>
            <Icon name={item.completed ? 'check' : 'circle'} />
            <p>{ item.value }</p>
        </div>
        <button className="list-item-remove" onClick={() => removeItem(item)}>
            <Icon name="times" />
        </button>
    </li>
  )
}

ListItem.propTypes = {
    item: PropTypes.object,
    toggleCompleted: PropTypes.func,
    removeItem: PropTypes.func
}

export default ListItem
