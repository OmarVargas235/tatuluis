import React from 'react';
import img from '../../assets/img/apple-touch-icon.png';
import { ReactComponent as Close } from '../../assets/iconos/close.svg';

const HeaderWhatsapp = ({ setOpen, setCloseInit }) => (

	<div className="card-header">
		<div className="row">
			<div className="col-3 pr-0">
				<img src={img} alt={img} className="rounded-circle w-75" />
			</div>

			<div className="col-7 pl-0">
				<p className="mb-0">Tatuluis</p>
				<p className="mb-0">Exclusive Tattoo Studio</p>	
			</div>

			<div className="col-2 text-right">
				<Close onClick={() => { setOpen(false); setCloseInit(false) }} />
			</div>
		</div>
	</div>
);

export default HeaderWhatsapp;