import React from 'react';
import Address from './Address';
import Telephone from './Telephone';
import Email from './Email';
import HourHand from './HourHand';
import Plat from './Map';

const ContactUs = () => {
	
	return (
		<React.Fragment>
			<section className="contact-us py-5" id="section5">
				<div className="container">
					<h3 className="text-center">Contáctanos</h3>
					<p className="text-center">Comunicate con nosotros</p>
					
					<div className="row no-gutters mt-5">
						<div className="col-12 col-sm-6 px-5 px-sm-0">

							<Address />
					
							<Telephone />
							
							<Email />
										
							<HourHand />
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