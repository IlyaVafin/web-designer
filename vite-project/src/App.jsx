import './App.css'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Industry from './components/industry/Industry'
import ContactUs from './components/pages/ContactUs'
import Kaput from './components/pages/Kaput'
import PrivacyPolitics from './components/pages/PrivacyPolitics/PrivacyPolitics'
import Projects from './components/projects/Projects'
import Reviews from './components/reviews/Reviews'
import RivoAgency from './components/rivoAgency/RivoAgency'
import Services from './components/servicesTechStack/Services'
import Header from './components/shared/header/Header'
import WhoWeAre from './components/whoWeAre/whoWeAre'
import Careers from './components/pages/Carres/Careers'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Home() {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<Hero />
			</div>
			<WhoWeAre />
			<Services />
			<Industry />
			<Projects />
			<Reviews/>
			<RivoAgency/>
			<Contacts/>
			<Footer/>
		</>
	)
}
function App() {
	return (
		<>
		<Router>
			<Routes>
				<Route path='/' element ={<Home/>} />
				<Route path='/contact' element = {<ContactUs/>}/>
				<Route path='*' element = {<Kaput/>} />
				<Route path='/privacy' element = {<PrivacyPolitics/>}/>
				<Route path = "/carrers" element = {<Careers/>}/>
			</Routes>
		</Router>
		</>
	)
}

export default App
