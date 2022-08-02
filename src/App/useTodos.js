import React from 'react';
import {useLocalStorage} from './UseLocalStorage';

function useTodos() {
	const {
		item: toDos,
		saveItem: saveToDos,
		loading,
		error,
		sincronize: sincronizeToDos,
	} = useLocalStorage('TODOS_V1', []);

	// Crear los estados para renderizar las tasks y el estado para las busquedas
	const [searchValue, setSearchValue] = React.useState('');

	const [openModal, setOpenModal] = React.useState(false);

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

	// Añadir task
	const addToDo = text => {
		const newToDos = [...toDos];
		newToDos.push({
			completed: false,
			text,
		});
		saveToDos(newToDos);
	};

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
	return {
		loading,
		error,
		totalToDos,
		completedToDos,
		searchValue,
		setSearchValue,
		searchedToDos,
		addToDo,
		completeToDo,
		deleteToDo,
		openModal,
		setOpenModal,
		sincronizeToDos,
	};
}

export {useTodos};
