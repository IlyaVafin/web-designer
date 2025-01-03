import React from 'react'
import Header from '../../shared/header/Header'
import './Careers.css'
import CarrersVacancies from './CareersVacancies'
import Contacts from './../../contacts/Contacts'
import Footer from './../../footer/Footer'
const Carrers = () => {
	return (
		<>
		<Header/>
		<div className="careers__wrapper">
			<div className="careers__container">
				<h1>Current vacancies</h1>
					<CarrersVacancies grade = 'SENIOR' vacancies= 'React developer' salary= '1500'/>
					<CarrersVacancies grade = 'MIDDLE' vacancies= 'PHP developer' salary= '1100' visible= 'none' ml = '70px'/>
					<CarrersVacancies grade = 'SENIOR' vacancies= 'Wordpress developer' salary= '1100' visible= 'none' ml = "-25px"/>
					<CarrersVacancies grade = 'JUNIOR' vacancies= 'Laravel developer' salary= '550' visible= 'none' ml = '25px' mlBtn= '10px'  mlPlace = '20px'/>
			</div>
			<Contacts/>
			<Footer/>
		</div>
		</>
	)
}

export default Carrers