import React from 'react';
import { listImg } from '../../../utils/images';
import { ReactComponent as Close } from '../../../assets/iconos/close.svg';
import { ReactComponent as Fullscreen } from '../../../assets/iconos/fullscreen.svg';
import { ReactComponent as Fullscreen1 } from '../../../assets/iconos/fullscreen (1).svg';
import { ReactComponent as ArrowLeft } from '../../../assets/iconos/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/iconos/arrow-right.svg';

const Modal = ({ img, changeNumberImage, nextOrPrevImg, setIsModal, modalRef, setFullscreen, fullscreen }) => (
	<div className="modal fade pr-0" id={img} ref={modalRef}>
		<div className="modal-dialog m-0 h-100">
			<div className="modal-content h-100">
				<div className="modal-header border-bottom-0">
					<p className="mb-0">
						{`${nextOrPrevImg} / ${listImg.length}`}
					</p>

					<div className="modal-header__icons">
						{
							fullscreen ? <Fullscreen1 onClick={() => setFullscreen(false)} /> 
							: <Fullscreen onClick={() => setFullscreen(true)} />
						}

						<Close 
							className="modal__close ml-4" 
							data-dismiss="modal" 
							onClick={() => setTimeout(() => setIsModal(false), 200)}
						/>
					</div>
				</div>
		
				<div className="modal-body p-0">
					<div id={`carousel-${img}`} 
						className="row justify-content-between h-100 carousel" 
						data-ride="carousel" 
						data-interval="false"
					>
						<div className="arrow col-2 col-md-3 col-lg-4 d-flex justify-content-center align-items-center">
							<span 
								className="d-flex justify-content-center align-items-center"
								href={`#carousel-${img}`}  data-slide="prev"
								onClick={() => changeNumberImage(-1)}
							>
								<ArrowLeft />
							</span>
						</div>

						<div className="col-7 col-md-6 col-lg-4">
							<div className="carousel-inner h-100">
								{
									listImg.map((IMG, index) => (
										<div 
											key={index} 
											className={`carousel-item h-100 ${img === IMG ? 'active' : ''}`}
										>
											<img 
												src={`./img/${IMG}.jpg`} 
												alt={IMG}
												className="img-fluid flex-grow-1" 
											/>
										</div>
									))
								}
						    </div>
						</div>

						<div className="arrow col-2 col-md-3 col-lg-4 d-flex justify-content-center align-items-center">
							<span 
								className="d-flex justify-content-center align-items-center"
								href={`#carousel-${img}`} data-slide="next"
								onClick={() => changeNumberImage(1)}
							>
								<ArrowRight />
							</span>
						</div>
					</div>
				</div>

				<div 
				className="modal-footer justify-content-center pb-2 border-top-0 flex-grow-1"
				>
					<p className="modal_footer__text text-left">El misterio</p>
				</div>
			</div>
		</div>
	</div>
)

export default Modal;