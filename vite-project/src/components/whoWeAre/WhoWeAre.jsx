import React from 'react'
import Video from '../shared/Video'
import mountain from './../../assets/199958-911694865_tiny.mp4'
import rating from './../../assets/rating.png'
import './whoWeAre.css'
const WhoWeAre = () => {
	return (
		<>
			<div className='who-we-are__wrapper'>
				<div className='container-content'>
					<div className='who-we-are__content'>
						<h1>Who we are</h1>
						<div className='flex'>
							<div className='who-we-are__video'>
								<Video srcVideo={mountain}/>
							</div>
							<div className='who-we-are__text'>
								<h4>Hi! We are a team of professionals</h4>
								<p>
									With proven expertise in delivering effeсtive, secured and
									high-quality digital solutions for various industries and
									digital marketing.
								</p>
								<h5>OUR COMPANY</h5>
								<p>
									Оffers development of different products starting from simple
									promo websites for individuals or companies, and finishing
									with complicated solutions for multiple purposes, e.g. <br />{' '}
									<br />
									CRM and ERP systems, scalable web platforms, mobile
									applications, Internet-of-Things, etc. <br /> We apply our
									expertise and knowledge to take your product from concept to
									prototype and to production.
								</p>
								<img src={rating} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default WhoWeAre
