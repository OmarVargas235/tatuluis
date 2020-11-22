import React from 'react';
import { ReactComponent as IconWhatsapp } from '../../assets/iconos/whatsapp.svg';

const BtnWhatsapp = ({ openOrClose_ModalWhatsapp }) => (
	<div 
		className="btn-icon-whatsapp d-flex justify-content-center align-items-center rounded-circle"
		onClick={openOrClose_ModalWhatsapp}
	>
		<IconWhatsapp /> 
	</div>
);

export default BtnWhatsapp;