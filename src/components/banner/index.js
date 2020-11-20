import React from 'react';
import BannerPage from './BannerPage';

const Banner = () => {
	
	const pauseAndPlayRef = React.createRef();
	const overlayRef = React.createRef();

	return (
		<BannerPage 
			pauseAndPlayRef={pauseAndPlayRef}
			overlayRef={overlayRef}
		/>
	)
}

export default Banner;