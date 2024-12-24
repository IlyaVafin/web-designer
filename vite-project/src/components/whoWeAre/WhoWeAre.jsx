import React, { useRef, useState } from 'react'
import './whoWeAre.css'
import mountain from './../../assets/199958-911694865_tiny.mp4'
import playButton from './../../assets/playButton.png'
import rating from './../../assets/rating.png'
const WhoWeAre = () => {
	const videoRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const playVideo = () => {
		const video = videoRef.current
		if (video.paused || video.ended) {
			video.play()
			setIsPlaying(true)
		} else {
			video.pause()
			setIsPlaying(false)
		}
	}
	return (
		<>
			<div className='who-we-are__wrapper'>
				<div className='container-content'>
					<div className='who-we-are__content'>
						<h1>Who we are</h1>
						<div className='flex'>
							<div className='who-we-are__video'>
								<video
									onClick={playVideo}
									ref={videoRef}
									width={690}
									height={383}
									src={mountain}
								></video>
								<button
									style={{ opacity: isPlaying ? '0' : '1' }}
									onClick={playVideo}
									className='button-play'
								>
									<img src={playButton} alt='' />
								</button>
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
