import React from 'react'
import amazonLogo from './../../assets/amazon-logo.svg'
import aws from './../../assets/aws.svg'
import bootstrap from './../../assets/bootstrap.svg'
import googleCloud from './../../assets/google-cloud.svg'
import graph from './../../assets/graph.svg'
import java from './../../assets/java.svg'
import jquery from './../../assets/JQUERY.svg'
import js from './../../assets/js.svg'
import laravel from './../../assets/laravel.svg'
import mysql from './../../assets/mysql.svg'
import node from './../../assets/node.svg'
import php from './../../assets/php.svg'
import reactNative from './../../assets/react-native.svg'
import redux from './../../assets/redux.svg'
import swift from './../../assets/swift.svg'
import vue from './../../assets/vuejs.svg'
import wordpress from './../../assets/wordpress.svg'
import './Services.css'
import ServicesCard from './ServicesCard'
import styles from './Style.module.css'
import styleThird from './StyleThird.module.css'
const Services = () => {
	return (
		<>
			<div style={{ paddingTop: '140px' }} className='services__wrapper'>
				<div className='card__container'>
					<h1>Services & Tech Stack </h1>
				</div>
				<div className='services__wrapper-card'>
					<ServicesCard
						id='(01)'
						title='Custom
						Software'
						desc='Using our great experience in a variety of technology stacks and industries, we provide customized software tailored to your business needs. Our experts design and develop a fast-loading, secure, and scalable SaaS solution that easily integrates with third-party services.'
						someClass='services__cardCompanies'
						img1={amazonLogo}
						img2={googleCloud}
						visible='none'
					/>
					<ServicesCard
						id='(02)'
						title='Mobile
						Development'
						desc='Request mobile app development at Rivo Agency to present your business to a wider audience, keep in touch with your customers, discover their needs and win their loyalty. Our app developers create customized solutions for iOS and Android devices that simplify customer interactions.'
						someClass={styles.services__cardCompanies}
						img1={swift}
						img2={reactNative}
						img3={node}
						img4={aws}
						img5={graph}
						img6={redux}
					/>
					<ServicesCard
						id='(03)'
						title='Web
						Development'
						someClass={styleThird.services__cardCompanies}
						img1 = {laravel}
						img2 = {php}
						img3={jquery}
						img4={js}
						img5={java}
						img6={bootstrap}
						img7={wordpress}
						img8={mysql}
						img9={vue}
						desc='Start developing your software with us to improve the efficiency of your business and attract potential customers. Having 10+ years of experience as a web and mobile app development company, we know how to create fast and powerful web apps that will serve your business for years.'
					/>
				</div>
			</div>
		</>
	)
}

export default Services
