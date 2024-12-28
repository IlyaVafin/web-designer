import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import arrowUp from './../../assets/arrow-up.svg'
import './Contacts.css'
import skrepka from './../../assets/skrepka.svg'
const Contacts = () => {
	const fileRef = useRef(null)
	const handleFileButtonClick = () => {
		event.preventDefault()
		fileRef.current.click();
	};
	
	const handleFileChange = (e) => {
		const fileName = e.target.files[0]?.name || 'No file chosen';
		document.querySelector('.file-name').textContent = fileName;
	};
	return (
		<>
			<div className="contacts__wrapper">
				<div className="contacts__container">
					<h1>Contacts</h1>
					<form className='contact-form' action="">
						<div className="radio-group">
							<label htmlFor="">
								<input type="radio" />
								Sales Representative
							</label>
							<label htmlFor="">
								<input type="radio" />
								Sales Representative
							</label>
						</div>
						<div className="input-group">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" name="name" placeholder="Alex Filiuk" />
						</div>


						<div className="input-group">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" name="email" placeholder="alex.f" />
						</div>


						<div className="input-group">
							<label htmlFor="phone">Phone</label>
							<input type="tel" id="phone" name="phone" placeholder="+38 (097) 7" />
						</div>


						<div className="input-group">
							<label htmlFor="message">Message</label>
							<input id="message" name="message" placeholder="Type your message here"></input>
						</div>

						<div style={{ marginBottom: '42px', marginTop: '32px' }} className="input-group-file">
							<label htmlFor="file">Attach file</label>
							<div className="file-upload">
							<button onClick={handleFileButtonClick}	
							className='file-button'>IMAGE.JPG</button>
							<img src={skrepka} alt="" />
							</div>
							<input onChange={handleFileChange} ref={fileRef} id='file-input' type="file" />
						</div>

						<button type="button" className="btn-send-message">Send Message <img src={arrowUp} alt="" /></button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Contacts