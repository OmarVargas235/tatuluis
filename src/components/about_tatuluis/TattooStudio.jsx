import React from 'react';
import { ReactComponent as Whatsapp } from '../../assets/iconos/whatsapp.svg';
import { ReactComponent as Facebook } from '../../assets/iconos/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/iconos/instagram.svg';

const TattooStudio = () => (
	<div className="container-md">
		<div className="row no-gutters justify-content-between">
			<div className="col-sm-7 align-self-center">
				<h2 className="text-sm-left">Tatuluis Tattoo Studio</h2>
				<p className="text-sm-left">Tatuluis fundado en 2013 por Luis Canche Fernández originario de Bécal, Campeche, México. Radicando ya desde hace 13 años en Cancún Quintana Roo, México y dedicado a este bello arte del Tatuaje hace ya más de 6 años, siempre buscando mejorar y aprender para poder brindarle siempre al cliente un trabajo digno y de calidad.</p>
				<div className="icons text-center text-md-left">
					<Facebook className="mr-4" />
					<Instagram className="mr-4" />
					<Whatsapp className="mr-4" />
				</div>
			</div>
			
			<div className="col-sm-4">
				<img src="./img/img_35.jpg" alt="img_35" className="img-fluid" />
			</div>
		</div>
	</div>
);

export default TattooStudio;