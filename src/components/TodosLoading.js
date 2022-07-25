import React from 'react';
import '../styles/TodosLoading.css';

function TodosLoading() {
	return (
		<li className='todoItem todoItem__loading'>
			<span className='todoItem-icon__loading'></span>
			<div className='todoItem-text__loading'></div>
			<span className='todoItem-delete__loading'></span>
		</li>
	);
}

export {TodosLoading};
