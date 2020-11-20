import React, { useContext } from 'react';
import { StateThemeContext } from '../../context/ChangeThemeContext';

import Ul from './Ul';

import { ReactComponent as Tatuluis } from '../../assets/iconos/tatuluis.svg';
import { ReactComponent as LastQuarter } from '../../assets/iconos/last-quarter.svg';
import { ReactComponent as BtnMenu } from '../../assets/iconos/menu.svg';
import { ReactComponent as Close } from '../../assets/iconos/close.svg';

const NavbarPage = props => {
	
	const { activeMenu, activeMenuChangeColor, scrollTop, disabledMenu, controllersActiveMenu } = props;

	const { isDark, setIsDark } = useContext(StateThemeContext);

	return (
		<nav className={`navbar navbar-expand-lg w-100 px-0 pb-0 fixed-top 
			${(activeMenuChangeColor || scrollTop || activeMenu) ? 'menuActive' : ''}`}
			style={{ transform: scrollTop ? 'translateY(-103%)' : 'translateY(0)' }}
		>
			<div className="container-lg">
				<Tatuluis className="navbar-brand ml-3 mb-2"  />
				
				<span className="order-lg-1 mr-3">
					<LastQuarter 
						style={{cursor: 'pointer'}}
						className="mr-1 mt-lg-1" 
						onClick={() => {
							document.querySelector('body').classList.toggle('theme');
							setIsDark(!isDark);
						}} 
					/> 
					
					{
						activeMenu 
						? <Close className="bars_close ml-3" onClick={controllersActiveMenu} /> 
						: <BtnMenu className="bars_close ml-3" onClick={controllersActiveMenu} />
					}
				</span>

				<div className={`navbar-collapse animate__animated links ${activeMenu ? 'animate__slideInLeft' : 'animate__slideOutLeft'} ${disabledMenu ? 'hideMenu' : ''}`}
				>
					<Ul 
						scrollTop={scrollTop}
					/>
				</div> 
			</div>
		</nav>	
	)
}

export default NavbarPage;