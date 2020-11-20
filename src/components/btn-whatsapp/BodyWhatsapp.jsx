import React, { useContext } from 'react';
import { ReactComponent as Stroke } from '../../assets/img/trazo.svg';
import { StateThemeContext } from '../../context/ChangeThemeContext';

const BodyWhatsapp = () => {

	const { isDark } = useContext(StateThemeContext);

	return (
		<div className={`card-body px-4 py-3 ${isDark ? 'img-body-dark' : 'img-body-light'}`}>
			<Stroke />

			<div className="message px-4 py-2">
				<p className="mb-0 message__name">Tatuluis Tattoo Studio</p>
				<p className="mb-0">Hola! Bienvenido a tatuluis.com cuentanos esa idea genial que tienes en mente.</p>
				<p className="mb-0">{new Date().getHours()}:{new Date().getMinutes()} p. m.</p>	
			</div>
		</div> 
	)
}

export default BodyWhatsapp;