import React from 'react';

function useLocalStorage(itemName, initialValue) {
	const [sincronizedItem, setSincronizedItem] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const [item, setItem] = React.useState(initialValue);

	React.useEffect(() => {
		setTimeout(() => {
			try {
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
				setSincronizedItem(true);
			} catch (error) {
				setError(error);
			}
		}, 2000);
		// Agregar el segundo parametro [sincronizedItem] con esto funciona la sincronización con las demás tabs del navegador
	}, [sincronizedItem, itemName, initialValue]);

	const saveItem = newItem => {
		try {
			const stringiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringiedItem);
			setItem(newItem);
		} catch (error) {
			setError(error);
		}
	};

	const sincronize = () => {
		setLoading(true);
		setSincronizedItem(false);
	};

	return {item, saveItem, loading, error, sincronize};
}

export {useLocalStorage};
