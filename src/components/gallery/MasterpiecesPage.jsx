import React from 'react';
import Card from './container/Card';
import { listImg } from '../../utils/images';
import { ReactComponent as InstagramIcon } from '../../assets/iconos/instagram.svg';

const MasterpiecesPage = () => (
	<section className="gallery text-center mt-4" id="section1">
		<h2>Obras maestras</h2>
		<p className="mb-5">Siguenos en INSTAGRAM para ver más contenido <InstagramIcon className="mr-1 mb-1" />
		@<span className="gallery__text">xxxxx__xx</span>. 😎</p>

		<div className="card-columns mt-0 m-3">
			{
				listImg.map((img, index) => (
					<Card 
						key={index}
						img={img}
					/>
				))
			}	
		</div>
	</section>
)

export default MasterpiecesPage;