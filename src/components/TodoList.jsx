import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../redux/todoSlice'
import TodoItem from './TodoItem'
// import tasks from '../tasks.png'
import '../App.css'
import { RxAvatar } from 'react-icons/rx'

function TodoList() {
	const [userInput, setUserInput] = useState('')
	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)

	const newItem = {
		id: Date.now(),
		title: userInput.trim(),
		done: false,
	}

	function handleOnClick() {
		if (userInput.trim()) {
			dispatch(addTodo(newItem))
			setUserInput('')
		}
	}
	function handleKeypress(e) {
		if (e.key === 'Enter') {
			handleOnClick()
		}
	}

	function handleDelete(id) {
		dispatch(deleteTodo(id))
	}

	function handleToggle(id) {
		dispatch(toggleTodo(id))
	}

	return (
		<div className='container'>
			<h2>Todo List</h2>
			<div className='avatar'>
				<RxAvatar size={28} />
			</div>

			<div>
				<textarea
					spellCheck='false'
					type='text'
					value={userInput}
					placeholder='Add a new todo...'
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={handleKeypress}
					className='input-value'
					maxlength='90'
				/>
				<button onClick={handleOnClick} type='button' className='add-btn'>
					Add
				</button>
			</div>

			<div className='todo-list'>
				{todos.map((todo) => (
					<div key={todo.id}>
						<TodoItem todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
					</div>
				))}
			</div>

			<footer className='footer'>
				<span className='footer-txt'>Stay Organized</span>
			</footer>
		</div>
	)
}

export default TodoList
