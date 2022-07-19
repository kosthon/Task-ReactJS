import React from 'react';
import {AppUI} from './AppUI';
import './App.css';

// const defaultToDos = [
// 	{text: 'Desarrollar o hacer diseño', completed: false},
// 	{text: 'Descansar 15 minutos', completed: true},
// 	{text: 'Estudiar modelo de negocio', completed: true},
// ];

function useLocalStorage(itemName, initialValue) {
	const [loading, setLoading] = React.useState(true);
	const [item, setItem] = React.useState(initialValue);

	React.useEffect(() => {
		setTimeout(() => {
			try{
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				setItem(parsedItem);
				setLoading(false);
			} catch(error) {
				
			}
		}, 1000);
	});

	const saveItem = newItem => {
		const stringiedItem = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringiedItem);
		setItem(newItem);
	};

	return {item, saveItem, loading};
}

function App() {
	const {item: toDos, saveItem: saveToDos, loading} = useLocalStorage('TODOS_V1', []);

	// Crear los estados para renderizar las tasks y el estado para las busquedas
	const [searchValue, setSearchValue] = React.useState('');

	// Filtro del numero total de tasks y numero de tasks completadas
	const completedToDos = toDos.filter(item => item.completed).length;
	const totalToDos = toDos.length;

	// Filtrar por busqueda y renderizarlos
	let searchedToDos = [];
	if (!searchValue.length >= 1) {
		searchedToDos = toDos;
	} else {
		searchedToDos = toDos.filter(item => {
			const toDoText = item.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return toDoText.includes(searchText);
		});
	}

	// Marcar como maracadas las tasks
	const completeToDo = text => {
		const todoIndex = toDos.findIndex(toDo => toDo.text === text);
		const newToDos = [...toDos];
		newToDos[todoIndex].completed = true;
		saveToDos(newToDos);
	};

	// Eliminar como maracadas las tasks
	const deleteToDo = text => {
		const todoIndex = toDos.findIndex(toDo => toDo.text === text);
		const newToDos = [...toDos];
		newToDos.splice(todoIndex, 1);
		saveToDos(newToDos);
	};

	return (
		<AppUI
			loading={loading}
			totalToDos={totalToDos}
			completedToDos={completedToDos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedToDos={searchedToDos}
			completeToDo={completeToDo}
			deleteToDo={deleteToDo}
		/>
	);
}

export default App;
