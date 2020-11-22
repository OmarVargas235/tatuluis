import React from 'react';
import ImageModal from './ImageModal';
import ArrowsModal from '../../../layauts/ArrowsModal';

import { ReactComponent as ArrowLeft } from '../../../assets/iconos/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/iconos/arrow-right.svg';

const ModalBody = ({ img, changeNumberImage, listImg }) => (
	<div className="modal-body p-0">
		<div id={`carousel-${img}`} 
			className="row justify-content-between h-100 carousel" 
			data-ride="carousel" 
			data-interval="false"
		>
			<ArrowsModal 
				img={img}
				data_slide="prev"
				changeNumberImage={changeNumberImage}
				Component={ArrowLeft}
				n={-1}
			/>

			<ImageModal listImg={listImg} img={img} />

			<ArrowsModal 
				img={img}
				data_slide="next"
				changeNumberImage={changeNumberImage}
				Component={ArrowRight}
				n={1}
			/>
		</div>
	</div>
)

export default ModalBody;