import React from 'react'
import './Hero.css'
import titleImg1 from './../../assets/titleImg1.jpg'
import titleImg2 from './../../assets/titleImg2.png'
import titleImg3 from './../../assets/titleImg3.png'
import contacUs from './../../assets/contactUs.png'
import bgHero from './../../assets/bgHero.png'
import bgHeroRight from './../../assets/bgHeroRight.png'
import scrollHero from './../../assets/scrollHero.png'
import inst from './../../assets/inst.svg'
import face from './../../assets/face.svg'
import linked from './../../assets/LinkedIn.svg'
const Hero = () => {
	return (
		<>
			<div className='hero__wrapper'>
				<div className='hero__content'>
					<section className='hero__title'>
						<p>We are RIVO agency</p>
						<article className='title-row'>
							<img width={168} height={118} src={titleImg1} alt='' />
							<span>WE help</span>
						</article>
						<article className='title-row'>
							<span>ideas</span>
							<img width={373} height={118} src={titleImg2} alt='' />
						</article>
						<article className='title-row'>
							<img width={221} height={118} src={titleImg3} alt='' />
							<span>CHANGE</span>
						</article>
						<article className='title-row'>
							<span>THE WORLD</span>
						</article>
					</section>
				</div>
				<div className='contact-us'>
					<a href=''>
						<img width={90} height={90} src={contacUs} alt='' />
					</a>
				</div>
				<img className='bg-hero' src={bgHero} alt='' />
				<img src={bgHeroRight} alt='' className='bg-hero-right' />
				<a href=''>
					<img className='hero-scroll' src={scrollHero} alt='' />
				</a>
				<div className='socials-hero'>
					<a href=''>
						<img src={face} alt='' />
					</a>
					<a href=''>
						<img src={linked} alt='' />
					</a>
					<a href=''>
						<img src={inst} alt='' />
					</a>
				</div>
			</div>
		</>
	)
}

export default Hero
