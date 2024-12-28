import React from 'react'
import logo from './../../assets/logoHeader.svg'
import './Footer.css'
import Navigation from '../shared/Navigation'
import scrollBtn from './../../assets/scrolltotop.svg'
import { Link } from 'react-router-dom'
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });  // For Chrome, Safari,Opera, and Firefox
	document.body.scrollTop = 0;       // For IE and Edge
}

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className="footer__top">
					<div className="footer__top-container">
						<img src={logo} alt="" />
					</div>
				</div>
				<div className="footer__nav-container">
					<nav className="footer__nav">
						<Navigation />
					</nav>
				</div>
				<div className="footer__bottom">
					<div className="footer__bottom-copyright">
						<span>2020 &copy; Rivo Agency</span>
						<Link to='/privacy'>Privacy Policy & Term of Use</Link>
					</div>
					<div className="btn-to-top">
						<span>Back to top</span>
						<button onClick={scrollToTop}>
							<img src={scrollBtn} alt="" />
						</button>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer