import React from 'react';
import { ReactComponent as Marker } from '../../assets/iconos/marker.svg';

const Address = () => (
	<div className="mb-5">
		<div className="mb-1 d-flex align-items-center">
			<Marker />
			<span className="font-weight-bold h5 ml-3 mb-0">Dirección</span>
		</div>
		
		<p>Sm 15-a Manzana 03 Lote 03 Local 17 Av. Acanceh</p>
	</div>
)

export default Address;