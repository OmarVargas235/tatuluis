import React, { useState, useEffect } from 'react';
import NavbarPage from './NavbarPage';

const Navbar = () => {

	const [activeMenu, setActiveMenu] = useState(false);
	const [activeMenuChangeColor, setActiveMenuChangeColor] = useState(false);
	const [scrollTop, setScrollTop] = useState(false);
	const [disabledMenu, setDisabledMenu] = useState(true);

	useEffect(() => {
		let scrollPrev = 0;

		function scroll() {
			setScrollTop(window.scrollY > scrollPrev);
			scrollPrev = window.scrollY;
			setActiveMenuChangeColor(window.scrollY > 0);
		}
		
		window.addEventListener('scroll', scroll);
	
		return () => window.removeEventListener('scroll', scroll);
	}, []);

	const controllersActiveMenu = () => {
		setActiveMenu(!activeMenu);
		setActiveMenuChangeColor(window.scrollY > 0 ? true : !activeMenu);
		setDisabledMenu(false);
	}
	
	return (
		<NavbarPage
			activeMenu={activeMenu} 
			activeMenuChangeColor={activeMenuChangeColor}
			scrollTop={scrollTop}
			disabledMenu={disabledMenu}
			controllersActiveMenu={controllersActiveMenu}
		/>
	)
}

export default Navbar;