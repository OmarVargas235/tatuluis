import React from 'react';
import { ReactComponent as Star } from '../../assets/iconos/estrella.svg';

const ExclusiveTattooStudio = () => (
	<React.Fragment>
		<h3>Tatuluis Exclusive Tattoo Studio</h3>
		<p className="clients_say__text mb-1">5.0</p>
		<div className="d-flex justify-content-center">
			<Star />
			<Star />
			<Star />
			<Star />
			<Star />
		</div>
		<p>53 opiniones</p>
	</React.Fragment>
);

export default ExclusiveTattooStudio;