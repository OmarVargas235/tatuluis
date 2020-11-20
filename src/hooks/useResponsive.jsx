import { useState, useEffect } from 'react';

const useResponsive = () => {
	
	const [isMediaQuery, setIsMediaQuery] = useState(false);
	
	useEffect(() => {
		window.addEventListener('resize', () => setIsMediaQuery(window.screen.width > 767));
	
		return () => window.addEventListener('resize', () => setIsMediaQuery(window.screen.width > 767));
	}, []);

	return [isMediaQuery];
}

export default useResponsive;