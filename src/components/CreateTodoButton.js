import React from 'react';
import {useTodos} from '../App/useTodos';

import '../styles/CreateTodoButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton({openModal, setOpenModal}) {
	const onClickButton = () => {
		setOpenModal(!openModal);
	};

	return (
		<button className='todoButton' onClick={onClickButton}>
			<FontAwesomeIcon icon={faPlus} />
			Add task
		</button>
	);
}

export {CreateTodoButton};
