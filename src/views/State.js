import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'

import { useSelector, useDispatch } from 'react-redux'
import { addTask, toggleCompleted, removeTask } from '../redux/todo'

function State () {
    const list = useSelector((state) => state.todo.tasks)
    const dispatch = useDispatch()

    const [newValue, setNewValue] = useState('')
    const handleChange = (e) => setNewValue(e.target.value)

    const addItem = (event) => {
        if (newValue.length) {
            dispatch(addTask(newValue))
            setNewValue('')
        }
        event.preventDefault()
    }
    const toggleItem = (id) => dispatch(toggleCompleted(id))
    const removeItem = (item) => {
        const confirmResult = window.confirm(`Tem certeza que deseja remover: "${item.value}" ?`)
        if (confirmResult) dispatch(removeTask(item.id))
    }

    return (
        <div id="container">
            <ul id="list">
                {list.map((item, index) => (
                    <ListItem 
                        key={index}
                        item={item}
                        toggleCompleted={toggleItem}
                        removeItem={removeItem}
                    />
                ))}
            </ul>
            <div id="new-item-box">
                <form onSubmit={addItem}>
                    <input type="text" value={newValue} onChange={handleChange} placeholder="Digite a nova tarefa..."/>
                    <button type="submit">
                        <Icon name="plus" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default State
