import React from 'react';

function useStorageListener(sincronizeToDos) {
	const [storageChange, setStorageChange] = React.useState(false);

	window.addEventListener('storage', change => {
		if (change.key === 'TODOS_V1') {
			console.log('Hubo cambios ');
			setStorageChange(true);
		}
	});

	const toggleShow = () => {
		sincronizeToDos();
		setStorageChange(false);
	};

	return {show: storageChange, toggleShow: toggleShow};
}

export {useStorageListener};
