export const setTime = () => {

	const date = new Date();
	let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(), 
		minutes = date.getMinutes();
	
	hours = hours === 0 ? 12 : Number(("0" + hours).slice(-2));

	minutes = ("0" + minutes).slice(-2);

	return `${hours}:${minutes} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
}

export const opinions = [
	{
		description: 'Excelente tatuador, muy limpio y súper buena onda.',
		img: 'photo(1)',
		name: 'Angeles E.',
		lastTime: '3 meses atras',
	},
	{
		description: 'Muy buen lugar atento y sobre todo muy higiénico muy recomendable es el mejor.',
		img: 'photo(2)',
		name: 'Carlos A.',
		lastTime: '9 meses atras',
	},
	{
		description: 'Excelente lugar ,ambiente y maravilloso trabajo el que me hicieron estoy muy contenta y lo recomiendo ampliamente !!!!.',
		img: 'photo',
		name: 'Alejandra P.',
		lastTime: '2 semanas atras',
	},
	{
		description: 'Me encantó el trabajo, llegué con una idea en mente medio mala y ellos de ayudaron a mejorarla y superaron al 100 mis expectativas. Súper recomendado.',
		img: 'unnamed(1)',
		name: 'Poodletime.',
		lastTime: '8 meses atras',
	},
	{
		description: 'Excelente servicio, el trabajo artístico en cada una de sus piezas es impecable y cada día mejoran sus técnicas, lo recomiendo ampliamente.',
		img: 'unnamed',
		name: 'Jhovana B.',
		lastTime: '10 meses atras',
	},
];

// {
// 	opinions.map((el, i) => (
// 		<div 
// 			className="carousel-item active flex-column px-5 text-center"
// 			key={i}
// 		>
// 			<p className="mb-2">{el.description}</p>

// 			<div className="row align-items-center">
// 				<div className="col-5 text-right">
// 					<img src={img1} alt={img1} className="img-fluid" />
// 				</div>

// 				<div className="col-7 text-left">
// 					<h4>{el.name}</h4>

// 					<div className="d-flex justify-content-start">
// 						<Star />
// 						<Star />
// 						<Star />
// 						<Star />
// 						<Star />
// 					</div>

// 					<p className="mb-0">{el.lastTime}</p>
// 				</div>
// 			</div>
// 		</div>
// 	))
// }