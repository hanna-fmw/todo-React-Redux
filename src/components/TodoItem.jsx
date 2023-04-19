import React from 'react'
import '../App.css'

function TodoItem({ todo, onDelete, onToggle }) {
	return (
		<div class='todo-item'>
			<div style={{ textDecoration: todo.done && 'line-through' }}>{todo.title}</div>

			<div class='todo-btns'>
				<button onClick={() => onToggle(todo.id)} class='done-btn'>
					{todo.done ? <div className='toggle-btn' /> : <div class='done-btn' />}
				</button>
				<button onClick={() => onDelete(todo.id)} class='del-btn' />
			</div>
		</div>
	)
}

export default TodoItem
