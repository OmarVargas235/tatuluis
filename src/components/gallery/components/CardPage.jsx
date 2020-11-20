import React from 'react';
import Modal from  '../container/Modal';
import { ReactComponent as InstagramIcon } from '../../../assets/iconos/instagram.svg';

const CardPage = ({ img, hover, setHover, isModal, setIsModal }) => (
	<React.Fragment>
		<div className="card mb-2" 
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<img 
				src={`./img/${img}.jpg`} 
				alt={img} 
				data-toggle="modal" 
				data-target={`#${img}`} 
				className="img-fluid"
				onClick={() => setIsModal(true)} 
			/>

			<div className={`icon-instagram d-flex justify-content-center animate__animated ${hover ?'animate__zoomIn' : 'animate__zoomOut'}`}>
				<InstagramIcon />
			</div>
		</div>
		
		{
			isModal ? <Modal img={img} setIsModal={setIsModal} /> : null 
		}
	</React.Fragment>
)

export default CardPage;