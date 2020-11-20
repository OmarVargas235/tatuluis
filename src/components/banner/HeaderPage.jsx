import React from 'react';
import { ReactComponent as Play } from '../../assets/iconos/boton-de-play.svg';
import { ReactComponent as Pausa } from '../../assets/iconos/pausa.svg';

const HeaderPage = ({ play, controllerPausePlay }) => (
	<div className="header d-flex flex-column">
		<header className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center mt-5">
			<h1 className="header__title text-center">Estudio de tatuajes Cancún, México.</h1>

			<p className="header__text text-center">Exclusivo Estudio de Tatuajes, ubicado en el corazón del Caribe Mexicano, Cancún
			Quintana Roo. Siempre buscando innovar en las técnicas de este Arte del Tatuaje.</p>
		</header>

		<footer className="header__footer d-flex justify-content-between align-items-center">
			<div className="">
				<span className="badge badge-exclusive">Exclusivo</span>
				<span className="badge">Tattoo Studio</span>
			</div>

			<React.Fragment>
				{
					play ? 	<Play className="header__btn mr-3 mt-1"  onClick={controllerPausePlay} />
					: <Pausa className="header__btn mr-3 mt-1"  onClick={controllerPausePlay} />
				}
			</React.Fragment>
		</footer>
	</div>
);

export default HeaderPage;