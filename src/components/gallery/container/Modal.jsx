import React, { useState, useEffect } from 'react';
import { searchPosImg } from '../../../utils/images';
import ModalPage from '../components/ModalPage';

const Modal = ({ img, setIsModal }) => {

	const [nextOrPrevImg, setNextOrPrevImg] = useState(searchPosImg(img));
	const [fullscreen, setFullscreen] = useState(false);

	const modalRef = React.createRef();

	useEffect(() => {
		
		if (document.fullscreenElement && !fullscreen) document.exitFullscreen(); // Sale de pantalla completa.
		else if (fullscreen) modalRef.current.requestFullscreen(); // Pantalla completa.
	
	}, [modalRef, fullscreen]);

	const changeNumberImage = n => {
		
		if (nextOrPrevImg < 2 && n === -1) { // Verifica si esta en la primera imagen.
			setNextOrPrevImg(34);
			return;

		} else if (nextOrPrevImg > 33 && n === 1) {// Verifica si esta en la ultima imagen.
			setNextOrPrevImg(1);
			return;
		}
		
		// Cambia el numero de la imagen.
		if (n === -1) setNextOrPrevImg( nextOrPrevImg - 1 );
		else if (n === 1) setNextOrPrevImg( nextOrPrevImg + 1 );
	}
	
	return (
		<ModalPage 
			img={img}
			changeNumberImage={changeNumberImage}
			nextOrPrevImg={nextOrPrevImg}
			setIsModal={setIsModal}
			modalRef={modalRef}			
			setFullscreen={setFullscreen}
			fullscreen={fullscreen}
		/>
	)
}

export default Modal;