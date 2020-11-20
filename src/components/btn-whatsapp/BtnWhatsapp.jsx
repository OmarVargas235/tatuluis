import React from 'react';
import { ReactComponent as IconWhatsapp } from '../../assets/iconos/whatsapp.svg';

const BtnWhatsapp = ({ setOpen, open, setCloseInit }) => (
	<div 
		className="icon-whatsapp d-flex justify-content-center align-items-center rounded-circle"
		onClick={() => { setOpen(!open); setCloseInit(false) }}
	>
		<IconWhatsapp /> 
	</div>
);

export default BtnWhatsapp;