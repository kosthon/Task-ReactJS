import React from 'react';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';
import {TodoContext} from '../components/TodoContext';
import {Modal} from '../components/Modal';
import {TodoForm} from '../components/TodoForm';
import {TodosError} from '../components/TodosError';
import {TodosLoading} from '../components/TodosLoading';
import {TodosEmpty} from '../components/TodosEmpty';
import './App.css';

function AppUI() {
	const {error, loading, searchedToDos, completeToDo, deleteToDo, openModal} =
		React.useContext(TodoContext);

	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{error && <TodosError />}
				{loading && (
					<ul>
						<TodosLoading />
						<TodosLoading />
					</ul>
				)}
				{!loading && !searchedToDos.length && <TodosEmpty />}
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
