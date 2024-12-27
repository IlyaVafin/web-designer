import React from 'react'
import { useForm } from 'react-hook-form'
import arrowUp from './../../assets/arrow-up.svg'
import './Contacts.css'
const Contacts = () => {
	const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it
	// const {
	// 	register,
	// 	formState: {
	// 		errors
	// 	},
	// 	handleSubmit,
	// } = useForm()

	// const onSubmit = (data) => {
	// 	alert(JSON.stringify(data))
	// }
	return (
		<>
		<div className="contacts__wrapper">
			<div className="contacts__container">
				<h1>Contacts</h1>
				{/* <form className='form' onSubmit={handleSubmit(onSubmit)} action="submit">
				<div className="">
				<input name='option' type="radio" />
				<label htmlFor="">Sales Representative</label>
				<input type="radio" name='option' />
				<label>Sales Representative</label>
				</div>
				<label>
					Name: <br />
					<input className='input-register' {...register('firstName')}	 name='name' />
				</label>
				<label>
					Email: <br />
					<input type='email' className='input-register' {...register('Email')}	 name='name' />
				</label>
				<button type='submit'>Send message <img src={arrowUp} alt="" /></button>
				</form> */}
				   /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
			</div>
		</div>
		</>
	)
}

export default Contacts