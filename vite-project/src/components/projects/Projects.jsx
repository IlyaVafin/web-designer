import React from 'react'
import dataProjects from './DataProjects'
import ProjectCard from './ProjectCard'
import './Projects.css'
import arrowUp from './../../assets/arrow-up.svg'
const Projects = () => {
	return (
		<>
			<div className='projects__wrapper'>
				<div className="container-projects">
				<h1>Projects</h1>
				<div className='projects__wrapper-card'>
					{dataProjects.map((item, index) => {
						return (
						<ProjectCard
							key={index}
							img={item.img}
							title={item.title}
							year={item.year}
						/>
						)
					})}
				</div>
				<button className="show-more">Show more cases 
					<img style={{marginLeft: '10px'}} src= {arrowUp} alt="" /></button>
				</div>
			</div>
		</>
	)
}

export default Projects
