import React from 'react'
import './Services.css'
import ServicesCard from './ServicesCard'
import amazonLogo from './../../assets/amazon-logo.svg'
import googleCloud from './../../assets/google-cloud.svg'
import swift from './../../assets/swift.svg'
import reactNative from './../../assets/react-native.svg'
import node from './../../assets/node.svg'
import aws from './../../assets/aws.svg'
import graph from './../../assets/graph.svg'
import redux from './../../assets/redux.svg'
import styles from './Style.module.css'
const Services = () => {
	return (
		<>
			<div style={{ paddingTop: '140px' }} className='services__wrapper'>
				<div className='card__container'>
					<h1
						style={{
							marginBottom: '52px',
							fontSize: '52px',
							fontWeight: '700',
						}}
					>
						Services & Tech Stack
					</h1>
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
						desc='Using our great experience in a variety of technology stacks and industries, we provide customized software tailored to your business needs. Our experts design and develop a fast-loading, secure, and scalable SaaS solution that easily integrates with third-party services.'
					/>
				</div>
			</div>
		</>
	)
}

export default Services
