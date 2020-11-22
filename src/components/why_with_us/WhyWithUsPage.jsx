import React from 'react';
import Hands from './Hands';
import Certificate from './Certificate';
import Chair from './Chair';
import Inks from './Inks';
import Machine from './Machine';
import FaceSkeleton from './FaceSkeleton';
import License from './License';

const WhyWithUsPage = () => (
	<section className="about-us pb-5 pt-4 px-4 px-lg-5" id="section2">

		<h2 className="text-center">¿Porqué tatuarte con nosotros?</h2>
		<p className="text-center mb-4">Te damos algunas razones por las que debes elegirnos.</p>

		<div className="about-us__grid">

			<Hands />

			<Certificate />

			<Chair />

			<Inks />

			<Machine />

			<FaceSkeleton />

			<License />

		</div>

	</section>
)

export default WhyWithUsPage;