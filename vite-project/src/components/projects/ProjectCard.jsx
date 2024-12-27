import React, { useState } from 'react'

const ProjectCard = ({ img, title, year }) => {
	return (
		<>
			<div className='project__card'>
				<div className='project__card-img'>
					<img src={img} alt='' />
					<p className='year'>{year}</p>
					<p className='title'>{title}</p>
					<div className='overlay'></div>
					<button  className='button-discover'>Discover</button>
				</div>
			</div>
		</>
	)
}

export default ProjectCard
