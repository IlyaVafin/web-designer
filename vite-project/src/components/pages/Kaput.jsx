import React from 'react'
import Header from '../shared/header/Header'
import kaputImg from './../../assets/kaput.svg'
import arrowup from './../../assets/arrow-up.svg'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
const Kaput = () => {
	return (
		<>	
		<div className="kaput__bg">
		<Header/>
		<div className="kaput__wrapper">
			<img src={kaputImg} alt="" />
			<h3>Kaput! Error 404</h3>
			<p style={{maxWidth: '730px', fontSize: '20px', textAlign: 'center', color: '#5B5B5C', marginBottom: '32px'}}>Unfortunately, the page you're looking for doesn't exist or there was an error in the link you followed or typed.</p>
			<Link to="/">
			<button>GO to home page <img src={arrowup} alt="" /></button>
			</Link>
		</div>
		<Footer/>
		</div>
		</>
	)
}

export default Kaput