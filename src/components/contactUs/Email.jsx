import React from 'react';
import { ReactComponent as EmailIcon } from '../../assets/iconos/email.svg';

const Email = () => (
	<div className="mb-5">
		<div className="mb-1 d-flex align-items-center">
			<EmailIcon />
			<span className="font-weight-bold h5 ml-3 mb-0">Email</span>
		</div>
		
		<p>tatuluis.tl@gmail.com</p>
	</div>
)

export default Email;