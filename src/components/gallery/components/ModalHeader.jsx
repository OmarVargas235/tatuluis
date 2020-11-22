import React from 'react';
import { ReactComponent as Fullscreen } from '../../../assets/iconos/fullscreen.svg';
import { ReactComponent as Fullscreen1 } from '../../../assets/iconos/fullscreen (1).svg';
import { ReactComponent as Close } from '../../../assets/iconos/close.svg';

const ModalHeader = ({ nextOrPrevImg, listImg, fullscreen, setFullscreen, setIsModal }) => (
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
)

export default ModalHeader;