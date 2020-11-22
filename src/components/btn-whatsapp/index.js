import React, { useState } from 'react';
import BtnWhatsapp from './BtnWhatsapp';
import HeaderWhatsapp from './HeaderWhatsapp';
import BodyWhatsapp from './BodyWhatsapp';
import FooterWhatsapp from './FooterWhatsapp';

const Whatsapp = () => {
	
	const [open, setOpen] = useState(false);
	const [closeInit, setCloseInit] = useState(true);

	const openOrClose_ModalWhatsapp = () => {
		setOpen(!open); 
		setCloseInit(false);
	}
	
	return (
		<React.Fragment>
			<BtnWhatsapp openOrClose_ModalWhatsapp={openOrClose_ModalWhatsapp} />

			<div className={`animate__animated ${open ? 'animate__fadeInUp' : 'animate__fadeOutDown'} container mb-5 container_modal_whatsapp`}
				style={{display: closeInit ? 'none' : 'block'}}
			>
				<div className="card">
					
					<HeaderWhatsapp setOpen={setOpen} />

					<BodyWhatsapp />

					<FooterWhatsapp />	
				</div>
			</div>
		</React.Fragment>
	)
}

export default Whatsapp;