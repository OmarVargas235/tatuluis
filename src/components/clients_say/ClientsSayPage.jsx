import React from 'react';
import { ReactComponent as Star } from '../../assets/iconos/estrella.svg';
import img1 from '../../assets/img/photo.png';
import img2 from '../../assets/img/photo(1).png';
import img3 from '../../assets/img/photo(2).png';
import img4 from '../../assets/img/unnamed.png';
import img5 from '../../assets/img/unnamed(1).png';

const ClientsSayPage = () => {
	
	return (
		<section className="clients_say px-4 text-center mt-4" id="section4">
			<h2>Que Opinan Nuestros Clientes</h2>
			<p>Tenemos 5 estrellas y más de 50 opiniones.</p>

			<div className="row no-gutters mt-5">
				<div className="col-sm-6">
					<h3>Tatuluis Exclusive Tattoo Studio</h3>
					<p className="clients_say__text mb-1">5.0</p>
					<div className="d-flex justify-content-center">
						<Star />
						<Star />
						<Star />
						<Star />
						<Star />
					</div>
					<p>53 opiniones</p>
				</div>

				<div className="col-sm-6 mt-5 mt-sm-0">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">

						<div className="carousel-inner">
							<div className="carousel-item active flex-column px-5 text-center">
								<p className="mb-2">Excelente tatuador, muy limpio y súper buena onda.</p>

								<div className="row align-items-center">
									<div className="col-5 text-right">
										<img src={img1} alt={img1} className="img-fluid" />
									</div>

									<div className="col-7 text-left">
										<h4>Angeles E.</h4>

										<div className="d-flex justify-content-start">
											<Star />
											<Star />
											<Star />
											<Star />
											<Star />
										</div>

										<p className="mb-0">3 meses atras</p>
									</div>
								</div>
							</div>

							<div className="carousel-item flex-column px-5 text-center">
								<p className="mb-2">Muy buen lugar atento y sobre todo muy higiénico muy recomendable es el mejor.</p>

								<div className="row align-items-center">
									<div className="col-5 text-right">
										<img src={img2} alt={img2} className="img-fluid" />
									</div>

									<div className="col-7 text-left">
										<h4>Carlos A.</h4>

										<div className="d-flex justify-content-start">
											<Star />
											<Star />
											<Star />
											<Star />
											<Star />
										</div>

										<p className="mb-0">9 meses atras</p>
									</div>
								</div>
							</div>

							<div className="carousel-item flex-column px-5 text-center">
								<p className="mb-2">Excelente lugar ,ambiente y maravilloso trabajo el que me hicieron estoy muy contenta y lo recomiendo ampliamente !!!!.</p>

								<div className="row align-items-center">
									<div className="col-5 text-right">
										<img src={img3} alt={img3} className="img-fluid" />
									</div>

									<div className="col-7 text-left">
										<h4>Alejandra P.</h4>

										<div className="d-flex justify-content-start">
											<Star />
											<Star />
											<Star />
											<Star />
											<Star />
										</div>

										<p className="mb-0">2 semanas atras</p>
									</div>
								</div>
							</div>

							<div className="carousel-item flex-column px-5 text-center">
								<p className="mb-2">Me encantó el trabajo, llegué con una idea en mente medio mala y ellos de ayudaron a mejorarla y superaron al 100 mis expectativas. Súper recomendado.</p>

								<div className="row align-items-center">
									<div className="col-5 text-right">
										<img src={img4} alt={img4} className="img-fluid" />
									</div>

									<div className="col-7 text-left">
										<h4>Poodletime.</h4>

										<div className="d-flex justify-content-start">
											<Star />
											<Star />
											<Star />
											<Star />
											<Star />
										</div>

										<p className="mb-0">8 meses atras</p>
									</div>
								</div>
							</div>

							<div className="carousel-item flex-column px-5 text-center">
								<p className="mb-2">Excelente servicio, el trabajo artístico en cada una de sus piezas es impecable y cada día mejoran sus técnicas, lo recomiendo ampliamente.</p>

								<div className="row align-items-center">
									<div className="col-5 text-right">
										<img src={img5} alt={img5} className="img-fluid" />
									</div>

									<div className="col-7 text-left">
										<h4>Jhovana b.</h4>

										<div className="d-flex justify-content-start">
											<Star />
											<Star />
											<Star />
											<Star />
											<Star />
										</div>

										<p className="mb-0">9 meses atras</p>
									</div>
								</div>
							</div>
						</div>

						<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
							<span 
								className="carousel-control-prev-icon"
								style={{backgroundColor: 'black'}}
							></span>
						</a>

						<a className="carousel-control-next" href="#myCarousel" data-slide="next">
							<span 
								className="carousel-control-next-icon"
								style={{backgroundColor: 'black'}}
							></span>
						</a>

					</div>
				</div>
			</div>
		</section>
	)
}

export default ClientsSayPage;