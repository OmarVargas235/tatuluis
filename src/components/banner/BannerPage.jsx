import React from 'react';
import Header from './Header';
import video from '../../assets/img/Tatuluis.mp4';

const Banner = ({ pauseAndPlayRef, overlayRef }) => (
	<section className="hero">
		<video muted loop autoPlay ref={pauseAndPlayRef} className="animate__animated animate__fadeIn">
			<source src={video} type="video/mp4" />
		</video>

		<div className="overlay" ref={overlayRef}></div>
		
		<Header 
			pauseAndPlayRef={pauseAndPlayRef}
			overlayRef={overlayRef}
		/>
	</section>
);

export default Banner;