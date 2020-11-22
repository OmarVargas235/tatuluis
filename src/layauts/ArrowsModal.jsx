import React from 'react';

const ArrowsModal = ({ img, data_slide, changeNumberImage, n, Component }) => (
	<div className="arrow col-2 col-md-3 col-lg-4 d-flex justify-content-center align-items-center">
		<span 
			className="d-flex justify-content-center align-items-center"
			href={`#carousel-${img}`}  data-slide={data_slide}
			onClick={() => changeNumberImage(n)}
		>
			<Component />
		</span>
	</div>
)

export default ArrowsModal;