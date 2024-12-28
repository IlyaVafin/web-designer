import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import arrowUp from './../../assets/arrow-up.svg'
import './Contacts.css'
import skrepka from './../../assets/skrepka.svg'
import ContactsCard from './ContactsCard'
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

	const { register, handleSubmit, formState } = useForm(
		{
			mode: 'onChange',
		}
	)
	const emailError = formState.errors['email']?.message
	const nameError = formState.errors['username']?.message
	const phoneError = formState.errors['phone']?.message
	const onSubmit = (data) => {
		let json = JSON.stringify(data)
		console.log(json)
	}
	return (
		<>
			<div className="contacts__wrapper">
				<div className="circle-bg"></div>
				<div className="contacts__container">
					<h1>Contacts</h1>
					<div className="contacts-content__wrapper">
					<form onSubmit={handleSubmit(onSubmit)} className='contact-form' action="">
						<div className="radio-group">
							<label htmlFor="">
								<input name='group1' type="radio" />
								Sales Representative
							</label>
							<label htmlFor="">
								<input name='group2' type="radio" />
								Sales Representative
							</label>
						</div>
						<div className="input-group">
							<label htmlFor="name">Name</label>
							<div style={{position: 'relative'}}>
							<input {...register('username',
								{
									required: 'This field is required',
									pattern: {
										value: /^[a-zA-Z0-9_]{3,16}$/,
										message: 'Valid username',
									}
								})}
								type="text"
								id="name"
								placeholder="Alex Filiuk" />
								{nameError && <span className='error name-error'>{nameError}</span>}
								</div>
						</div>


						<div className="input-group">
							<label htmlFor="email">Email</label>
							<div style={{position: 'relative'}} className="">
							<input {...register('email',
								{
									required: 'This field is required',
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: 'Email must contain the @ symbol',
									}
								}
							)} type="email" id="email" name="email" placeholder="alex.f" />
							{emailError && <span className='error email-error'>{emailError}</span>}
							</div>
						</div>


						<div className="input-group">
							<label htmlFor="phone">Phone</label>
							<input {...register('phone', {
								required: 'This field is required',
								pattern: {
									value: /^\+?[1-9]\d{1,14}$/,
									message: 'Phone number must be in the format +38 (097) 7...'
								}
							})} type="tel" id="phone" name="phone" placeholder="+38 (097) 7" />
							{phoneError && <span className='error phone-error'>{phoneError}</span>}
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

						<button type="submit" className="btn-send-message">Send Message <img src={arrowUp} alt="" /></button>
					</form>
					<ContactsCard/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contacts