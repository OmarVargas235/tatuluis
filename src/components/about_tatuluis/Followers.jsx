import React from 'react';
import { ReactComponent as Facebook } from '../../assets/iconos/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/iconos/instagram.svg';

const Followers = () => (
	<div className="row content-parallax align-items-center mt-5">
		<div className="col-6">
			<p className="d-flex justify-content-center align-items-center">
				<Facebook className="mr-1 mr-sm-4" /> Facebook
			</p>
			<p>19,202</p>
			<p>Likes</p>
		</div>
		
		<div className="col-6">
			<p className="d-flex justify-content-center align-items-center">
				<Instagram className="mr-1 mr-sm-4" /> Instagram
			</p>
			<p>5,652</p>
			<p>Seguidores</p>
		</div>

		<div className="overlay"></div>
	</div>
);

export default Followers;