import React from 'react'
import rivo4 from './../../assets/rivo4.jpg'
import rivo5 from './../../assets/rivo5.jpg'
const RivoStatistics = () => {
	return (
		<>
		<div className="rivo-agency__card-wrapper-bottom">
							<section className="rivo-agency__statistics">
								<article className="rivo-agency__item">
									<h2>2010</h2>
									<p>Founded</p>
								</article>
								<article className="rivo-agency__item">
									<h2>70+</h2>
									<p>Teammates</p>
								</article>
								<article className="rivo-agency__item">
									<h2>237</h2>
									<p>Projects handled</p>
								</article>
								<article className="rivo-agency__item">
									<h2>2</h2>
									<p>Development centers</p>
								</article>
							</section>
							<img className='center-img' src={rivo4} alt="" />
							<img width={450} height={300} src={rivo5} alt="" />
							</div>
		</>
	)
}

export default RivoStatistics