import React from 'react';

const ArrowsCarousel = ({ carousel_control, data_slide, icon }) => (
	<a className={`${carousel_control}`} href="#myCarousel" data-slide={data_slide}>
		<span 
			className={`${icon}`}
			style={{backgroundColor: 'black'}}
		></span>
	</a>
)

export default ArrowsCarousel;