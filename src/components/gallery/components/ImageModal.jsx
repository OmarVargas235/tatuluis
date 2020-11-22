import React from 'react';

const ImageModal = ({ listImg, img }) => (
	<div className="col-7 col-md-6 col-lg-4">
		<div className="carousel-inner h-100">
			{
				listImg.map((IMG, index) => (
					<div 
						key={index} 
						className={`carousel-item h-100 ${IMG === img ? 'active' : ''}`}
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
)

export default ImageModal;