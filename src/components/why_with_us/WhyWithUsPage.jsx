import React from 'react';
import { ReactComponent as Hands } from '../../assets/iconos/hands.svg';
import { ReactComponent as Certificate } from '../../assets/iconos/certificate.svg';
import { ReactComponent as Chair } from '../../assets/iconos/chair.svg';
import { ReactComponent as Inks } from '../../assets/iconos/inks.svg';
import { ReactComponent as Machine } from '../../assets/iconos/machine.svg';
import { ReactComponent as FaceSkeleton } from '../../assets/iconos/faceSkeleton.svg';
import { ReactComponent as License } from '../../assets/iconos/license.svg';

const WhyWithUsPage = () => (
	<section className="about-us pb-5 pt-4 px-4 px-lg-5" id="section2">

		<h2 className="text-center">¿Porqué tatuarte con nosotros?</h2>
		<p className="text-center mb-4">Te damos algunas razones por las que debes elegirnos.</p>

		<div className="about-us__grid">
			<div className="about-us__grid-item about-us__grid-item-1">
				<Hands />
				<h2>¿Porqué tatuarte con nosotros?</h2>
				<p>Uso de cubrebocas, guantes desechables, gasas y agujas esterilizadas y desechables.</p>
			</div>

			<div className="about-us__grid-item about-us__grid-item-2 d-flex flex-column justify-content-center">
				<Certificate className="align-self-center" />
				<h2>Artistas Premiados</h2>
				<p>1er lugar en Realismo en sombras en ExpoTatoo Cancún 2018.</p>
			</div>

			<div className="about-us__grid-item">
				<Chair />
				<h2>Higiénico</h2>
				<p>Áreas limpias todo el tiempo.</p>
			</div>

			<div className="about-us__grid-item about-us__grid-item-3 d-flex flex-column justify-content-center">
				<Inks  className="align-self-center" />
				<h2>Mejores Tintas</h2>
				<p>Usamos sólo los mejores productos y de calidad.</p>
			</div>

			<div className="about-us__grid-item">
				<Machine />
				<h2>Calidad Precio</h2>
				<p>Los mejores precios.</p>
			</div>

			<div className="about-us__grid-item">
				<FaceSkeleton />
				<h2>Experiencia</h2>
				<p>6 Años de experiencia.</p>
			</div>

			<div className="about-us__grid-item about-us__grid-item-4">
				<License />
				<h2>Con licencia</h2>
				<p>Contamos con todos los permisos.</p>
			</div>
		</div>

	</section>
)

export default WhyWithUsPage;