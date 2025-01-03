import React from 'react'
import Header from '../../shared/header/Header'
import arrowLeft from './../../../assets/arrow-left.svg'
import './Privacy.css'
import Footer from  './../../../components/footer/Footer'
import { Link } from 'react-router-dom'
const PrivacyPolitics = () => {
	return (
		<>
			<div className="wrapper__privacy">
				<Header />
				<div className="privacy__container">
					<div className="back-to-home">
						<Link style={{ height: '18px', display: 'flex', alignItems: 'center', columnGap: '16px' }} to = "/">
							<img src={arrowLeft} alt="" />
							<span>Back to home page</span>
						</Link>
					</div>
					<p id='p1'>Website Terms and Conditions of Use</p>
					<p id='p2'>Website administrator</p>
					<p id='p3'>The rivo.agency website’s (“Website”) owner and administrator is Rivo Agency, a company incorporated under the laws of the Ukraine, with its registered office in Rivne, st. Melnica 1, entered into the register of entrepreneurs of the Ukrainian National Court Register maintained by the District Court for Rivne.</p>
					<p style={{ marginTop: '24px' }} id="p2">Terms and Conditions of Use</p>
					<p id="p3">By accessing this Website, you agree to be bound by these Website Terms and Conditions of Use (“T&C”), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this Website. The materials contained in this Website are protected by applicable copyright and trade mark law.
						You may use the Website only for lawful purposes. It is forbidden to use the Website: in any way which may lead to a violation of applicable law; in any manner that is unlawful or dishonest, or in a manner that seeks to achieve an unlawful or unfair purpose; to send, knowingly receive, upload, use or reuse content that does not comply with the T&C; to forward or provoke the shipment of any unsolicited or unauthorized advertising or promotional materials, as well as any similar forms belonging to the collective category of “spam”; to knowingly transfer any data, send or upload any material containing viruses, trojans, spyware, adware or other malicious software or similar computer codes programmed to adversely affect or threaten the functioning of any software, network or computer equipment. It is forbidden to attempt to gain unauthorized access to the server on which the Website is stored, computer or database related to the Website, as well as any unauthorised access aimed at or resulting in damage or disruption of any part of the Website, equipment or network where the Website is stored, any software used to operate the Website or any equipment, networks or software owned by or used by third parties.</p>
					<p style={{ marginTop: '24px' }} id="p2">Use License</p>
					<p id='p3'>Rivo Agency grants permission to temporarily download one copy of the materials on the Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
					<ul className='list-privacy'>
						<li>modify or copy the materials;</li>
						<li>use the materials for any commercial purposes, or fro any public display (commercial or non-commercial);</li>
						<li>attempt to decompile or disassemble any software contained on the Website;</li>
						<li>remove any copyright or other proprietary notices from the materials;</li>
						<li>remove any copyright or other proprietary notations from the materials; or</li>
						<li>transfer the materials to another entity or "mirror" the materials on any other server </li>
					</ul>
					<p id='p3'>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Netguru at any time. Upon termination, your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
					<p style={{ marginTop: '24px' }} id="p2">Disclaimer</p>
					<p id="p3">Rivo Agency makes no warranties and representations, expressed or implied, to the digital availability, functionality, compatibility, visibility and/or comprehensibility of the Website. Rivo Agency makes no guarantee that the Website or any of its contents will always be available or access will not be impeded. Rivo Agency holds no liability for any temporary or permanent unavailability or inaccessibility of the Website, in whole or in any part, for any reason and at any time. The materials on Website are provided "as is". Rivo Agency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Rivo Agency does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the Website or otherwise relating to such materials or on any sites linked to this site.
						Any information or statements included on the Website shall not constitute a binding offer and cannot be construed as such.</p>
					<p id="p2">Limitations</p>
					<p id="p3">In no event shall Rivo Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data, profit,, anticipated savings, violation of business continuity, loss of reputation, claims of third parties, damage caused by delay or moral damage) arising out of the use or inability to use the materials on the Website,. In particular, Rivo Agency is not liable for damages caused by viruses and other software, and/or that results from accessing or downloading materials that the Website contains. If you decide to download materials from the Website, you do so at your own risk.
						Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
					<p id="p2">Revision & Errata</p>
					<p id="p3">The materials appearing on the Website could include technical, typographical, or photographic errors. Rivo Agency does not warrant that any of the materials on the Website are accurate, complete, or up-to-date. Rivo Agency is entitled to suspend, withdraw, cease operation or modify all or some elements of the Website at any time without notice.. Rivo Agency does not, however, make any commitment to update the materials.</p>
					<p id="p2">Links</p>
					<p id="p3">The Website may contain third party materials or links to other websites. Links to other websites are provided on the Website for your information and convenience only. Rivo Agency has no control over these websites, does not check, oversee, review, approve or endorse its contents. Rivo Agency is not responsible for the availability of these websites, their contents nor for any damage or harm that might be inflicted as a result of accessing those websites. . Use of any such linked website is at the user's own risk.</p>
					<p id="p2">Modification</p>
					<p id="p3">Rivo Agency may revise, modify or amend the T&C at any time without notice. By using this Website you agree to be bound by the current version of the T&C.</p>
					<p id="p2">Breach, Governing Law</p>
					<p id="p3">If Rivo Agency becomes aware of a breach of the T&C, Rivo Agency may immediately implement corrective actions, including disabling access to the Website as well as removing any information, data and content provided by the user on the Website at any time, to any extent and without notice.
						Any claims or disputed relating to the use of Website or a breach of this T&C shall be governed by the laws of the Ukraine without regard to its conflict of law provisions. Any claims and disputes shall be settled by the competent Ukrainian common court, having jurisdiction over Rivo Agency registered seat.</p>
					<p id="privacy-title">Privacy Policy</p>
					<p id="p3">The privacy of our website’s users is very important to us, which is why we have developed this Privacy Policy so that you can understand how we collect, process, disclose, and use your personal information. <br /> <br />

						Rivo Agency. as the Data Controller of the service and personal data ensures that:</p>
					<ul className="list-privacy">
						<li>Data shall always be collected for specified and clearly defined purposes and to the extent necessary to achieve those purposes.</li>
						<li>Personal data shall be kept for as long as necessary to achieve these purposes. </li>
						<li>Presonal data shall be collected lawfully and failry at all times, where appropriate, with the knowledge or consent of the data subject.</li>
						<li>Personal data is protected with reasonable safeguards against loss or theft, as well as against unauthorized acces, disclosure, copying, use or modification.</li>
						<li>its clients are provided with information about the rules and practices realting to personal data management.</li>
					</ul>
					<p style={{ marginTop: '24px' }} id="p2">Article 1. Privacy and Processing Information</p>
					<ul className="list-privacy">
						<li>The Data Controller of personal data is Rivo Agency. with its registered office in Rivne, 1 Melnica Street.</li>
						<li>
						Rivo Agency as a personal data Controller (hereinafter referred to as "Controller") pays great attention to the protection of privacy and confidentiality of personal data of Users who make their data available in electronic form through forms available on the website in the domain rivo.agency (hereinafter referred to as "rivo.agency"), the rules of which are specified in the Terms of Use (hereinafter referred to as "Terms of Use") or by registering to meetups and forums organized by Rivo Agency.</li>
						<li>
						The Data Protection Officer of Rivo Agency is Nikolas Lishchenko who can be contacted via e-mail: nik@rivo.agency</li>
						<li>The Controller shall, with due diligence, select and apply appropriate technical and organizational measures to protect personal data being processed. Full access to databases is granted only to persons authorized by the Controller.</li>
						<li>The Controller protects personal data against unauthorized access and processing in violation of applicable regulations.</li>
						<li>Visitors to netguru.com can browse through subpages of the website without providing personal data.</li>
					</ul>
				</div>
				<Footer/>
			</div>
		</>
	)
}

export default PrivacyPolitics