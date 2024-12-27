import React from 'react'
import { useState, useRef } from 'react'
import playButton from './../../assets/playButton.png'
const Video = ({srcVideo}) => {
	const videoRef = useRef(null)
		const [isPlaying, setIsPlaying] = useState(false)
		const playVideo = () => {
			const video = videoRef.current
			if (video.paused || video.ended) {
				video.play()
				setIsPlaying(true)
			} else {
				video.pause()
				setIsPlaying(false)
			}
		}
	return (
		<>
			<video
				onClick={playVideo}
				ref={videoRef}
				width={690}
				height={383}
				src={srcVideo}
			></video>
			<button
				style={{ opacity: isPlaying ? '0' : '1' }}
				onClick={playVideo}
				className='button-play'
			>
				<img src={playButton} alt='' />
			</button>
		</>
	)
}

export default Video
