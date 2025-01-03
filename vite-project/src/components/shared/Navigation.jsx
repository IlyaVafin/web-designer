import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<>
			<ul className='burger-open__list'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<a href=''>Who We Are</a>
							</li>
							<li>
								<a href=''>Reviews</a>
							</li>
							<li>
								<a href=''>Contact</a>
							</li>
							<li>
								<Link  style={{ position: 'relative' }} to = "/carrers">
									Career
									<span className='hot'>HOT</span>
								</Link>
							</li>
							<li>
								<a href=''>Blog</a>
							</li>
						</ul>
			<ul className='burger-open__list-second'>
							<li>
								<p className='Projects'>Projects</p>
								<div className='links-list'>
									<a href=''>Meda</a>
									<a href=''>Saltmine</a>
									<a href=''>Odex</a>
									<a href=''>Jotul</a>
									<a href=''>Haulcars</a>
									<a href=''>Skyline Enerrgy</a>
									<a href=''>...</a>
								</div>
							</li>
							<li style={{ maxWidth: '493px' }}>
								<a className='Services'>Services</a>
								<div className='links-list'>
									<a href=''>Custom Software</a>
									<a href=''>Mobile Development</a>
									<a href=''>Web Development</a>
								</div>
							</li>
							<li>
								<p className='Industry'>Industry Expertise</p>
								<div className='industry__links'>
									<a href=''>Healthcare & Fitness</a>
									<a href=''>Real Estate</a>
									<a href=''>Custom CRM</a>
									<a href=''>Education & E-learning</a>
									<div className='industry__links-bottom'>
										<a style={{ marginLeft: '0' }} href=''>
											Food & Restaurant
										</a>
										<a href=''>Retail & E-Commerce</a>
										<a href=''>Logistic & Distribution</a>
									</div>
								</div>
							</li>
							<li>
								<a className='Stack'>Our Stack</a>
								<div className='links-list'>
									<a href=''>Custom Software</a>
									<a href=''>Mobile Development</a>
									<a href=''>Web Development</a>
								</div>
							</li>
						</ul>
		</>
	)
}

export default Navigation