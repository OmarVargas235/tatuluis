import React from 'react';

const Ul = ({ scrollTop }) => (
	<ul className="navbar-nav d-flex justify-content-around justify-content-lg-center align-items-center w-100"
		style={{
			height: scrollTop ? '102vh' : 'calc(100vh - 80px)'
		}}
	>
		<li className="nav-item mr-4">
			<a className="nav-link btn btn-link" href="#section1">Mi Trabajo</a>
		</li>
		<li className="nav-item mr-4">
			<a className="nav-link btn btn-link" href="#section2">¿Porqué en Tatuluis?</a>
		</li>
		<li className="nav-item mr-4">
			<a className="nav-link btn btn-link" href="#section3">Nosotros</a>
		</li>
		<li className="nav-item mr-4">
			<a className="nav-link btn btn-link" href="#section4">Los clientes dicen</a>
		</li>
		<li className="nav-item">
			<a className="nav-link btn btn-link" href="#section5">Contacto</a>
		</li>   
	</ul>
);

export default Ul;