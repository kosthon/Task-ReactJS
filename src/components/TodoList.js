import React from 'react';
import '../styles/TodoList.css';

function TodoList(props) {
	return <ul className='todoList'>{props.children}</ul>;
}

export {TodoList};
