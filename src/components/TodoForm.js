import React from 'react';
import {TodoContext} from '../components/TodoContext';

function TodoForm() {
	const [newToDoValue, setNewToDoValue] = React.useState('');
	const {addToDo, setOpenModal} = React.useContext(TodoContext);

	const onSubmit = event => {
		event.preventDefault();
		if (newToDoValue.length >= 4) {
			addToDo(newToDoValue);
			setOpenModal(false);
		}
	};

	const onChange = event => {
		setNewToDoValue(event.target.value);
	};

	const onCancel = () => {
		setOpenModal(false);
	};

	return (
		<form className='modal__content-form' onSubmit={onSubmit}>
			<label>Write a task to accomplish</label>
			<textarea placeholder='Read a book' required value={newToDoValue} onChange={onChange} />
			<div className='modal__content-buttons'>
				<button type='button' onClick={onCancel}>
					Cancel
				</button>
				<button type='submit'>Add</button>
			</div>
		</form>
	);
}

export {TodoForm};
