import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

function Modal({children}) {
	return ReactDOM.createPortal(
		<div className='modal__background'>
			<div className='modal__content'>{children}</div>
		</div>,
		document.getElementById('modal')
	);
}

export {Modal};
