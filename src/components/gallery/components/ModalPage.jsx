import React from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

import { listImg } from '../../../utils/images';

const Modal = ({ img, changeNumberImage, nextOrPrevImg, setIsModal, modalRef, setFullscreen, fullscreen }) => (
	<div className="modal fade pr-0" id={img} ref={modalRef}>
		<div className="modal-dialog m-0 h-100">
			<div className="modal-content h-100">
				
				<ModalHeader 
					nextOrPrevImg={nextOrPrevImg}
					listImg={listImg}
					fullscreen={fullscreen}
					setFullscreen={setFullscreen}
					setIsModal={setIsModal} 
				/>

				<ModalBody 
					img={img}
					changeNumberImage={changeNumberImage}
					listImg={listImg}
				/>

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