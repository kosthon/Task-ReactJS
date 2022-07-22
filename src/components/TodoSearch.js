import React from 'react';
import {TodoContext} from '../components/TodoContext';

import '../styles/TodoSearch.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function TodoSearch() {
	const {searchValue, setSearchValue} = React.useContext(TodoContext);

	const onSearchValueChange = event => {
		// console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<div className='todoSearch'>
			<span className='todoSearch-icon'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</span>
			<input
				className='todoSearch-input'
				placeholder='Search your homework'
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</div>
	);
}

export {TodoSearch};
