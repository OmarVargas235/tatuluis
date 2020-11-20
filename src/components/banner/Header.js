import React, { useState, useEffect } from 'react';
import HeaderPage from './HeaderPage';

const Header = ({ pauseAndPlayRef, overlayRef }) => {

	const [play, setPlay] = useState(false);

	let isHidden = false;

	useEffect(() => {

		let hidden, visibilityChange; 

		// Establece el nombre de la propiedad hidden y el evento visibilityChange
		if (typeof document.hidden !== "undefined") { // Opera 12.10 y Firefox 18 y posterior posterior
		  hidden = "hidden";
		  visibilityChange = "visibilitychange";

		} else if (typeof document.msHidden !== "undefined") {
		  hidden = "msHidden";
		  visibilityChange = "msvisibilitychange";

		} else if (typeof document.webkitHidden !== "undefined") {
		  hidden = "webkitHidden";
		  visibilityChange = "webkitvisibilitychange";
		}
		
		// Si la página está oculta, pausa el video y le agrega un opacity de cero.
		function handleVisibilityChange() {
		  if (document[hidden]) {
		  	isHidden = true;
		    controllerPausePlay();
		  }
		}
		
		// Maneja el cambio de visibilidad de la página.
		document.addEventListener(visibilityChange, handleVisibilityChange, false);
	
		return () => document.removeEventListener(visibilityChange, handleVisibilityChange, false);

	}, []);

	const controllerPausePlay = () => {

		const video = pauseAndPlayRef.current;

		if (!pauseAndPlayRef.current) return;

		setPlay(!play);
		!play ? video.pause() : video.play();

		
		// Si el video esta pausado y la ventana esta en segundo plano, ocurre la condicion.
		if (!play && isHidden) {
			video.classList.add('opacity_video');
			video.classList.remove('animate__fadeIn');
			overlayRef.current.classList.remove('overlay');

		} else {
			video.classList.remove('opacity_video');
			video.classList.add('animate__fadeIn');
			overlayRef.current.classList.add('overlay');
			isHidden = false;
		}
	}
	
	return (
		<HeaderPage 
			play={play}
			controllerPausePlay={controllerPausePlay}
		/>
	)
}

export default Header;