import React from 'react'
import facebook from './../../assets/face.svg'
import linked from './../../assets/LinkedIn.svg'
import inst from './../../assets/inst.svg'
const ContactsCard = () => {
	return (
		<>
		<div className="card-contacts__container">
			<div className="card-contacts__header">
				<h3>Let’s make something that matters</h3>
			</div>
			<div className="card-contacts__content">
				<div className="column card-contacts__column-1  column-text">
					<h4>Drop us a line</h4>
					<p>sales@rivo.agency</p>
				</div>
				<div className="column card-contacts__column-2">
					<img src={facebook} alt="" />
					<img src={linked} alt="" />
					<img src={inst} alt="" />
				</div>
				<div className="column card-contacts__column-3">
				<div className="card-contacts__column-3-estonia column-text">
					<h4>Estonia</h4>
					<p style={{maxWidth: '285px'}}>401 S Milwaukee Ave Wheeling, IL 60090, USA</p>
					<p>+1 347 705 79 35</p>
				</div>
				<div className="card-contacts__column-3-ukraine  column-text">
					<h4>Ukraine</h4>
					<p>Rivne, A. Melnyk str.1, 33016</p>
					<p>+380 96 424 71 50</p>
				</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default ContactsCard