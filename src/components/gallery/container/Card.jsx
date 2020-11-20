import React, { useState } from 'react';
import CardPage from '../components/CardPage';

const Card = ({ img }) => {

	const [hover, setHover] = useState(false);
	const [isModal, setIsModal] = useState(false);

	return (
		<CardPage
			img={img}
			hover={hover}
			setHover={setHover}
			isModal={isModal}
			setIsModal={setIsModal}
		/>
	)
}

export default Card;