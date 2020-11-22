import React from 'react';
import { ReactComponent as InksIcon } from '../../assets/iconos/inks.svg';

const Inks = () => (
	<div className="about-us__grid-item about-us__grid-item-3 d-flex flex-column justify-content-center">
		<InksIcon  className="align-self-center" />
		<h2>Mejores Tintas</h2>
		<p>Usamos sólo los mejores productos y de calidad.</p>
	</div>
)

export default Inks;