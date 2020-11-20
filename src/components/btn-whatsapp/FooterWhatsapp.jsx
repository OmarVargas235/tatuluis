import React from 'react';
import { ReactComponent as IconWhatsapp } from '../../assets/iconos/whatsapp.svg';
import { ReactComponent as Phone } from '../../assets/iconos/phone.svg';

const FooterWhatsapp = () => (
	
	<div className="card-footer p-4 d-flex justify-content-between">
		<button className="btn btn-light py-1 px-3">
			<span className="mr-2">Iniciar chat</span>
			<IconWhatsapp /> 
		</button>

		<button className="btn btn-success py-1 px-3">
			<span className="mr-2">Llamar</span>
			<Phone />
		</button>
	</div>
);

export default FooterWhatsapp;