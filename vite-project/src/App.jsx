import './App.css'
import Contacts from './components/contacts/Contacts'
import Hero from './components/hero/Hero'
import Industry from './components/industry/Industry'
import Projects from './components/projects/Projects'
import Reviews from './components/reviews/Reviews'
import RivoAgency from './components/rivoAgency/RivoAgency'
import Services from './components/servicesTechStack/Services'
import Header from './components/shared/header/Header'
import WhoWeAre from './components/whoWeAre/whoWeAre'
function App() {
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
		</>
	)
}

export default App
