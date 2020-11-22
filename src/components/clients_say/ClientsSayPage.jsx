import React from 'react';
import ExclusiveTattooStudio from './ExclusiveTattooStudio';
import Carousel from './Carousel';
import ArrowsCarousel from '../../layauts/ArrowsCarousel';

const ClientsSayPage = () => {
	
	return (
		<section className="clients_say px-4 text-center mt-4" id="section4">
			<h2>Que Opinan Nuestros Clientes</h2>
			<p>Tenemos 5 estrellas y más de 50 opiniones.</p>

			<div className="row no-gutters mt-5">
				<div className="col-sm-6">
					<ExclusiveTattooStudio />
				</div>

				<div className="col-sm-6 mt-5 mt-sm-0">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">

						<Carousel />
						
						<ArrowsCarousel 
							carousel_control='carousel-control-prev'
							data_slide='prev'
							icon='carousel-control-prev-icon'
						/>

						<ArrowsCarousel 
							carousel_control='carousel-control-next'
							data_slide='next'
							icon='carousel-control-next-icon'
						/>

					</div>
				</div>
			</div>
		</section>
	)
}

export default ClientsSayPage;