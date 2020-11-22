import React from 'react';
import { ReactComponent as Clock } from '../../assets/iconos/clock.svg';

const HourHand = () => (
	<div className="mb-5">
		<div className="mb-1 d-flex align-items-center">
			<Clock />
			<span className="font-weight-bold h5 ml-3 mb-0">Horario</span>
		</div>
		
		<p>Lunes a Sábado de 10:00am a 8:00pm (con cita).</p>
	</div>
)

export default HourHand;