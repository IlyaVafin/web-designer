import React from 'react'

const CarrersVacancies = ({ grade, vacancies, salary, visible, ml, mlBtn, mlPlace }) => {
	return (
		<>
			<div className="vacancies-card">
				<div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
					<span className='vacancies-card__grade'>{grade}</span>
					<p className='vacancies-card__vacancie'>{vacancies}</p>	
					<span style={{ display: visible }} className='HOT'>HOT</span>
				</div>
				<div className="">
				<span style={{marginLeft: ml}} className='vacancies-card__salary'>Salary: ${salary}</span>
				</div>
				<div className="">
				<span style={{marginLeft: mlPlace}} className='vacancies-card__place'>Lutsk, Rivne, remote</span>
				</div>
				<button style={{marginLeft: mlBtn}} className='vacancies-card__btn'>VIEW DETAIL</button>
			</div>
		</>
	)
}

export default CarrersVacancies