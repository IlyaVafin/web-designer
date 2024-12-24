import './App.css'
import Hero from './components/hero/Hero'
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
		</>
	)
}

export default App
