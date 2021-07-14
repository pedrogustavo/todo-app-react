import React from 'react'
import ListItem from '../components/ListItem'

const { useState } = React
function Home () {
    const [list, setList] = useState([
        {
            id: 1,
            value: 'Create react app',
            completed: false
        },
        {
            id: 2,
            value: 'react-router',
            completed: false
        },
        {
            id: 3,
            value: 'i18n',
            completed: true
        }
    ])
    const [newValue, setNewValue] = useState('')

    const handleChange = (e) => setNewValue(e.target.value)

    const addItem = (event) => {
        if (newValue.length) {
            setList([...list, {
                id: list.length + 1,
                value: newValue,
                completed: false
            }])
            setNewValue('')
        }
        event.preventDefault()
    }

    const toggleItem = (id) => {
        setList(list.map(item => {
            if (item.id === id) item.completed = !item.completed
            return item
        }))
    }

    return (
        <div id="container">
            <ul id="list">
                {list.map((item, index) => (
                    <ListItem key={index} item={item} toggleCompleted={toggleItem} />
                ))}
            </ul>
            <div id="new-item-box">
                <form onSubmit={addItem}>
                    <input type="text" value={newValue} onChange={handleChange} placeholder="Digite a nova tarefa..."/>
                    <button type="submit">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home
