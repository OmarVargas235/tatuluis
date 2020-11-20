import React, { useState } from 'react';
import BtnWhatsapp from './BtnWhatsapp';
import HeaderWhatsapp from './HeaderWhatsapp';
import BodyWhatsapp from './BodyWhatsapp';
import FooterWhatsapp from './FooterWhatsapp';

const Whatsapp = () => {
	
	const [open, setOpen] = useState(false);
	const [closeInit, setCloseInit] = useState(true);
	
	return (
		<React.Fragment>
			<BtnWhatsapp open={open} setOpen={setOpen} setCloseInit={setCloseInit} />

			<div className={`animate__animated ${open ? 'animate__fadeInUp' : 'animate__fadeOutDown'} container mb-5 icon-whatsapps`}
				style={{display: closeInit ? 'none' : 'block'}}
			>
				<div className="card">
					
					<HeaderWhatsapp setOpen={setOpen} setCloseInit={setCloseInit} />

					<BodyWhatsapp />

					<FooterWhatsapp />	
				</div>
			</div>
		</React.Fragment>
	)
}

export default Whatsapp;