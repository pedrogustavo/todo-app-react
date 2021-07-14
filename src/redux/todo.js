import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [
        {
            id: 1,
            value: 'Instalar create-react-app',
            completed: true
        },
        {
            id: 2,
            value: 'Criar componentes na aplicação',
            completed: true
        },
        {
            id: 3,
            value: 'Adicionar react-router',
            completed: false
        },
        {
            id: 4,
            value: 'Adicionar react-redux',
            completed: false
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
    },
    toggleCompleted: (state, action) => {
        state.tasks = state.tasks.map(item => {
            if (item.id === action.payload) item.completed = !item.completed
            return item
        })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTask, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer