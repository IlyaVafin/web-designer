import React from 'react'
import './RivoAgency.css'
import rivo1 from './../../assets/rivo1.jpg'
import rivo2 from './../../assets/rivo2.jpg'
import rivo3 from './../../assets/rivo3.jpg'
import RivoStatistics from './RivoStatistics'
const RivoAgency = () => {
	return (
		<>
		<div style={{position: 'relative'}} className="rivo-agency__wrapper">
			<div className="rivo-agency__container">
				<h1>We are Rivo Agency</h1>
				<div className="rivo-agency__card-wrapper-top">
					<img src={rivo1} alt="" />
					<img src={rivo2} alt="" />
					<img src={rivo3} alt="" />
					</div>
					<RivoStatistics/>
			</div>
		</div>
		</>
	)
}

export default RivoAgency