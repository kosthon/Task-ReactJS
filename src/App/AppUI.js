import React from 'react';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';
import './App.css';

function AppUI({
	loading,
	error,
	totalToDos,
	completedToDos,
	searchValue,
	setSearchValue,
	searchedToDos,
	completeToDo,
	deleteToDo,
}) {
	return (
		<React.Fragment>
			<TodoCounter total={totalToDos} completed={completedToDos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
			<CreateTodoButton />
		</React.Fragment>
	);
}

export {AppUI};
