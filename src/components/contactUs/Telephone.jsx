import React from 'react';
import { ReactComponent as Phone } from '../../assets/iconos/phone.svg';

const Telephone = () => (
	<div className="mb-5">
		<div className="mb-1 d-flex align-items-center">
			<Phone />
			<span className="font-weight-bold h5 ml-3 mb-0">Teléfono</span>
		</div>
		
		<p>+52 998 505 14 03</p>
	</div>
)

export default Telephone;