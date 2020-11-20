import React from 'react';
import Plat from './Map';

import { ReactComponent as Marker } from '../../assets/iconos/marker.svg';
import { ReactComponent as Phone } from '../../assets/iconos/phone.svg';
import { ReactComponent as Email } from '../../assets/iconos/email.svg';
import { ReactComponent as Clock } from '../../assets/iconos/clock.svg';

const ContactUs = () => {
	
	return (
		<React.Fragment>
			<section className="contact-us py-5" id="section5">
				<div className="container">
					<h3 className="text-center">Contáctanos</h3>
					<p className="text-center">Comunicate con nosotros</p>
					
					<div className="row no-gutters mt-5">
						<div className="col-12 col-sm-6 px-5 px-sm-0">
							<div className="mb-5">
								<div className="mb-1 d-flex align-items-center">
									<Marker />
									<span className="font-weight-bold h5 ml-3 mb-0">Dirección</span>
								</div>
								
								<p>Sm 15-a Manzana 03 Lote 03 Local 17 Av. Acanceh</p>
							</div>
					
							<div className="mb-5">
								<div className="mb-1 d-flex align-items-center">
									<Phone />
									<span className="font-weight-bold h5 ml-3 mb-0">Teléfono</span>
								</div>
								
								<p>+52 998 505 14 03</p>
							</div>
					
							<div className="mb-5">
								<div className="mb-1 d-flex align-items-center">
									<Email />
									<span className="font-weight-bold h5 ml-3 mb-0">Email</span>
								</div>
								
								<p>tatuluis.tl@gmail.com</p>
							</div>
					
							<div className="mb-5">
								<div className="mb-1 d-flex align-items-center">
									<Clock />
									<span className="font-weight-bold h5 ml-3 mb-0">Horario</span>
								</div>
								
								<p>Lunes a Sábado de 10:00am a 8:00pm (con cita).</p>
							</div>
						</div>
					
						<div className="col-12 col-sm-6 px-2">
							<Plat />
						</div>
					</div>
				</div>
			</section>

			<footer className="row text-center no-gutters py-4">
				<p className="mb-2 mb-sm-0 col-6 col-sm-4">
					<span className="footer__text">Términos & Condiciones</span>
				</p>
				<p className="mb-2 mb-sm-0 col-6 col-sm-4">
					<span className="footer__text">Política de Privacidad</span>
				</p>
				<p className="mb-0 col-12 col-sm-4">© 2013-2020 Copyright Tatuluis.</p>
			</footer>
		</React.Fragment>
	)
}

export default ContactUs;