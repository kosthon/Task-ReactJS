import React from 'react';
import {TodoContext} from '../components/TodoContext';

import '../styles/TodoCounter.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faListCheck} from '@fortawesome/free-solid-svg-icons';

function TodoCounter() {
	const {totalToDos, completedToDos} = React.useContext(TodoContext);

	return (
		<div className='todoCounter'>
			<span className='todoCounter-icon'>
				<FontAwesomeIcon icon={faListCheck} />
			</span>
			<div className='todoCounter-text'>
				<h1 className='todoCounter-title'>Manage your tasks</h1>
				<h2 className='todoCounter-subtitle'>
					You have completed {completedToDos} task out of {totalToDos}.
				</h2>
			</div>
		</div>
	);
}

export {TodoCounter};
