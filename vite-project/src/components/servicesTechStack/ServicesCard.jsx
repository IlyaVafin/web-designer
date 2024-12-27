import React, { useState } from 'react'
const ServicesCard = ({
	id,
	title,
	desc,
	visible,
	someClass,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9
}) => {
	const [showCard, setCardShow] = useState(false)
	const showCardFunc = () => {
		setCardShow(true)
	}
	const deleteCardFunc = () => {
		setCardShow(false)
	}
	return (
		<>
			<div
				onMouseEnter={showCardFunc}
				onMouseLeave={deleteCardFunc}
				className='card__container'
			>
				<section className='services__card'>
					<article className='services-card__title'>
						<span>{id}</span>
						<h2 style={{ maxWidth: '218px' }}>{title}</h2>
					</article>
					<p>{desc}</p>
					<div
						style={{ display: showCard ? 'flex' : 'none' }}
						className={someClass}
					>
						<img src={img1} alt='' />
						<img src={img2} alt='' />
						<img style={{ display: visible }} src={img3} alt='' />
						<img style={{ display: visible }} src={img4} alt='' />
						<img style={{ display: visible }} src={img5} alt='' />
						<img style={{ display: visible }} src={img6} alt='' />
						<img style={{ display: visible }} src={img7} alt='' />
						<img style={{ display: visible }} src={img8} alt='' />
						<img style={{ display: visible }} src={img9} alt='' />
					</div>
				</section>
			</div>
		</>
	)
}

export default ServicesCard
