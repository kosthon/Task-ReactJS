import React from 'react';
import {useTodos} from './useTodos';
import {TodoHeader} from '../components/TodoHeader';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';
import {Modal} from '../components/Modal';
import {TodoForm} from '../components/TodoForm';
import {TodosError} from '../components/TodosError';
import {TodosLoading} from '../components/TodosLoading';
import {TodosEmpty} from '../components/TodosEmpty';
import {ChangeAlert} from '../components/ChangeAlert';

import './App.css';

function App() {
	const {
		error,
		loading,
		searchedToDos,
		completeToDo,
		deleteToDo,
		openModal,
		totalToDos,
		completedToDos,
		searchValue,
		setSearchValue,
		addToDo,
		setOpenModal,
		sincronizeToDos,
	} = useTodos();

	return (
		<React.Fragment>
			<TodoHeader loading={loading}>
				<TodoCounter totalToDos={totalToDos} completedToDos={completedToDos} />
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedToDos={searchedToDos}
				totalToDos={totalToDos}
				searchText={searchValue}
				onErro={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmpty={() => <TodosEmpty />}
				onEmptySearchResult={searchText => (
					<p className='informative__mesagge'>Not found results for "{searchText}".</p>
				)}
				render={item => (
					<TodoItem
						key={item.text}
						text={item.text}
						completed={item.completed}
						onComplete={() => completeToDo(item.text)}
						onDelete={() => deleteToDo(item.text)}
					/>
				)}
			/>

			{/*<TodoList>
				{error && <TodosError />}
				{loading && (
					<ul>
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
			</TodoList>*/}

			{openModal && (
				<Modal>
					<TodoForm addToDo={addToDo} setOpenModal={setOpenModal}></TodoForm>
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />

			<ChangeAlert sincronizeToDos={sincronizeToDos} />
		</React.Fragment>
	);
}

export default App;
