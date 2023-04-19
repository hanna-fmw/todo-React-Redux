import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload)
		},
		deleteTodo: (state, action) => {
			const id = action.payload
			return state.filter((todo) => todo.id !== id)
		},
		toggleTodo: (state, action) => {
			const id = action.payload
			const todo = state.find((todo) => todo.id === id)
			if (todo) {
				todo.done = !todo.done
			}
		},
	},
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
