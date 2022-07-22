import React from 'react';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';
import {TodoContext} from '../components/TodoContext';
import {Modal} from '../components/Modal';
import {TodoForm} from '../components/TodoForm';
import './App.css';

function AppUI() {
	const {error, loading, searchedToDos, completeToDo, deleteToDo, openModal, setOpenModal} =
		React.useContext(TodoContext);

	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{error && <p className='informative__mesagge'>Error!</p>}
				{loading && <p className='informative__mesagge'>Loading...</p>}
				{!loading && !searchedToDos.length && (
					<p className='informative__mesagge'>Create your first task please</p>
				)}
				{searchedToDos.map(item => (
					<TodoItem
						key={item.text}
						text={item.text}
						completed={item.completed}
						onComplete={() => completeToDo(item.text)}
						onDelete={() => deleteToDo(item.text)}
					/>
				))}
			</TodoList>

			{openModal && (
				<Modal>
					<TodoForm></TodoForm>
				</Modal>
			)}

			<CreateTodoButton />
		</React.Fragment>
	);
}

export {AppUI};
