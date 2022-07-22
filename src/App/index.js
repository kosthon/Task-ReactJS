import React from 'react';
import {AppUI} from './AppUI';
import {TodoProvider} from '../components/TodoContext';
import './App.css';

// const defaultToDos = [
// 	{text: 'Desarrollar o hacer diseño', completed: false},
// 	{text: 'Descansar 15 minutos', completed: true},
// 	{text: 'Estudiar modelo de negocio', completed: true},
// ];

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
