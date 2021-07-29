import { createSlice } from '@reduxjs/toolkit'

const updateStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: localStorage.getItem('tasks') 
        ? JSON.parse(localStorage.getItem('tasks'))
        : [
            {
                id: 1,
                value: 'npx create-react-app my-app',
                completed: true
            }
        ]    
  },
  reducers: {
    addTask: (state, action) => {
        state.tasks = [
            ...state.tasks, 
            {
                id: state.tasks.length + 1,
                value: action.payload,
                completed: false
            }
        ]
        updateStorage('tasks', state.tasks)
    },
    toggleCompleted: (state, action) => {
        state.tasks = state.tasks.map(item => {
            if (item.id === action.payload) item.completed = !item.completed
            return item
        })
        updateStorage('tasks', state.tasks)
    },
    removeTask: (state, action) => {
        state.tasks = state.tasks
            .filter(item => item.id !== action.payload)
            .map((item, index) => {
                item.id = index
                return item
            })
        updateStorage('tasks', state.tasks)
    }
  }
})

export const { addTask, toggleCompleted, removeTask } = todoSlice.actions

export default todoSlice.reducer