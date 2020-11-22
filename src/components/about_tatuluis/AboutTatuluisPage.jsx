import React from 'react';
import TattooStudio from './TattooStudio';
import Followers from './Followers';

const AboutTatuluisPage = () => (
	<section className="p-4 text-center" id="section3">
		<h2>Sobre Tatuluis</h2>
		<p>Luis Canche Fernández.</p>

		<TattooStudio />

		<Followers />
	</section>	
);

export default AboutTatuluisPage;