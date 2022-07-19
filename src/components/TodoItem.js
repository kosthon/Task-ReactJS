import React from 'react';
import '../styles/TodoItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
// import {faCircle} from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {
	return (
		<li className='todoItem'>
			<span
				className={`todoItem-icon ${props.completed && 'todoItem-icon__active'}`}
				onClick={props.onComplete}
			>
				<FontAwesomeIcon icon={faCircleCheck} />
			</span>
			<p className={`todoItem-text ${props.completed && 'todoItem-text__completed'}`}>
				{props.text}
			</p>
			<span className='todoItem-delete' onClick={props.onDelete}>
				<FontAwesomeIcon icon={faTrashCan} />
			</span>
		</li>
	);
}

export {TodoItem};
