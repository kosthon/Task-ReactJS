import React from 'react';
import {TodoContext} from '../components/TodoContext';

import '../styles/CreateTodoButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton() {
	const {openModal, setOpenModal} = React.useContext(TodoContext);

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
