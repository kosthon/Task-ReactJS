import React from 'react';
import '../styles/CreateTodoButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton() {
	const onClickButton = () => {
		alert('Esto es un click');
	};

	return (
		<button className='todoButton' onClick={onClickButton}>
			<FontAwesomeIcon icon={faPlus} />
			Add task
		</button>
	);
}

export {CreateTodoButton};
