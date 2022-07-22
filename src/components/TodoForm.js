import React from 'react';
import {TodoContext} from '../components/TodoContext';

function TodoForm() {
	const [newToDoValue, setNewToDoValue] = React.useState('');
	const {addToDo, setOpenModal} = React.useContext(TodoContext);

	const onSubmit = event => {
		event.preventDefault();
		addToDo(newToDoValue);
		setOpenModal(false);
	};

	const onChange = event => {
		setNewToDoValue(event.target.value);
	};

	const onCancel = () => {
		setOpenModal(false);
	};

	return (
		<form onSubmit={onSubmit}>
			<label></label>
			<textarea placeholder='Write task please' value={newToDoValue} onChange={onChange} />
			<div>
				<button type='button' onClick={onCancel}>
					Cancel
				</button>
				<button type='submit'>Add</button>
			</div>
		</form>
	);
}

export {TodoForm};
