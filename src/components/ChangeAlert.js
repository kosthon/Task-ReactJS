import React from 'react';
import {useStorageListener} from './useStorageListner';
import '../styles/ChangeAlert.css';

function ChangeAlert({sincronizeToDos}) {
	const {show, toggleShow} = useStorageListener(sincronizeToDos);

	if (show) {
		return (
			<div className='changeAlert__bg'>
				<div className='changeAlert__content'>
					<p>Changes were made in another browser tab, please reload the page.</p>
					<button onClick={() => toggleShow(false)}>Refresh page!</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export {ChangeAlert};
