import React from 'react';
import { ReactComponent as Star } from '../../assets/iconos/estrella.svg';
import { opinions } from '../../utils/helper';

const Carousel = () => (
	<div className="carousel-inner">
		{
			opinions.map((el, i) => (
				<div 
					className={`carousel-item flex-column px-5 text-center ${i === 0 ? 'active' : ''}`}
					key={i}
				>
					<p className="mb-2">{el.description}</p>

					<div className="row align-items-center">
						<div className="col-5 text-right">
							<img src={`./img/opiniones/${el.img}.png`} alt={el.img} className="img-fluid" />
						</div>

						<div className="col-7 text-left">
							<h4>{el.name}</h4>

							<div className="d-flex justify-content-start">
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />
							</div>

							<p className="mb-0">{el.lastTime}</p>
						</div>
					</div>
				</div>
			))
		}
	</div>
);

export default Carousel;