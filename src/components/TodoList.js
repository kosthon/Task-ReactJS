import React from 'react';
import '../styles/TodoList.css';

function TodoList(props) {
	return (
		<section className='todoList__container'>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{!props.loading && !props.totalToDos && props.onEmpty()}
			{!!props.totalToDos &&
				!props.searchedToDos.length &&
				props.onEmptySearchResult(props.searchText)}

			{props.searchedToDos.map(todo => props.render(todo))}
		</section>
	);

	// return <ul className='todoList'>{props.children}</ul>;
}

export {TodoList};
