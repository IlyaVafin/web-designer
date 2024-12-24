import React, { useState } from 'react'
import arrow from '../../../assets/Arrow_icon.svg'
import burgerMenu from '../../../assets/Burger_menu_icon.svg'
import Logo from '../../../assets/logoHeader.svg'
import close from '../../../assets/close.svg'
import inst from '../../../assets/inst.svg'
import face from '../../../assets/face.svg'
import linked from '../../../assets/LinkedIn.svg'
import './Header.css'
const Header = () => {
	const [show, setShow] = useState(false)
	const showFunc = () => {
		setShow(!show)
		document.body.style.overflowY = show ? 'auto' : 'hidden'
	}
	return (
		<>
			<div
				style={{
					display: show ? 'block' : 'none',
				}}
				className='burger__wrapper'
			>
				<div style={{ position: 'relative' }} className='container'>
					<div className='burger__menu-open'>
						<header className='header__burger'>
							<div className='header__burger-inner'>
								<img className='logo-burger' src={Logo} alt='' />
								<section className='header__close'>
									<button onClick={showFunc}>
										<img src={close} alt='' />
										<span>CLOSE</span>
									</button>
								</section>
							</div>
						</header>
					</div>
				</div>
				<div className='container__menu-burger'>
					<nav className='menu__burger-open'>
						<ul className='burger-open__list'>
							<li>
								<a href=''>Home</a>
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
								<a style={{ position: 'relative' }} href=''>
									Career
									<span className='hot'>HOT</span>
								</a>
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
					</nav>
				</div>
				<div className='info__wrapper'>
					<div className='info__container'>
						<header className='info__header'>
							<h2>Let’s make something that matters</h2>
						</header>
						<div className='info__content'>
							<section className='info__address'>
								<h6>Address</h6>
								<p>
									Kaupmehe tn 7-120 Kesklinna linnaosa, Tallinn Harju maakond
									10114
								</p>
							</section>
							<section className='info__socials'>
								<article className='info__socials-img'>
									<a href=''>
										<img src={face} alt='' />
									</a>
									<a href=''>
										<img src={linked} alt='' />
									</a>
									<a href=''>
										<img src={inst} alt='' />
									</a>
								</article>
							</section>
							<section className='info__country'>
								<article className='info__country-block'>
									<h6>Estonia</h6>
									<p>+1 347 705 79 35</p>
								</article>
								<article
									style={{ marginLeft: '72px' }}
									className='info__country-block'
								>
									<h6>Ukraine</h6>
									<p>+380 96 424 71 50</p>
								</article>
							</section>
						</div>
					</div>
				</div>
			</div>

			<header style={{ display: show ? 'none' : 'block' }} className='header'>
				<div className='container'>
					<div className='header__inner'>
						<img
							style={{ marginBottom: '19px', marginTop: '19px' }}
							src={Logo}
							alt=''
						/>
						<nav className='nav'>
							<ul className='nav__list'>
								<li>
									<a href=''>
										Projects
										<span className='number-16'>16</span>
									</a>
								</li>
								<li>
									<a href=''>Services</a>
								</li>
								<li>
									<a href=''>
										Expertise
										<img style={{ marginLeft: '5px' }} src={arrow} alt='' />
									</a>
								</li>
								<li>
									<a href=''>Contacts</a>
								</li>
								<li>
									<a href=''>
										Careers
										<span className='hot'>HOT</span>
									</a>
								</li>
							</ul>
							<nav className='nav__menu'>
								<li>
									<button onClick={showFunc} className='nav__burger-button'>
										<img src={burgerMenu} alt='' />
									</button>
								</li>
								<li>
									<span
										style={{
											fontFamily: 'RoadRadio',
											fontSize: '18px',
											lineHeight: '18px',
										}}
									>
										MENU
									</span>
								</li>
							</nav>
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
