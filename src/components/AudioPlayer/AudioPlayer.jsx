import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import Wrapper from '../Wrapper'
import AudioSlider from './AudioSlider/AudioSlider'

const AudioPlayer = ({classNames}) => {
	const audioRef = useRef()
	const [duration, setDuration] = useState(0)
	const [maxSlider, setMaxSlide] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [isPlay, setPlay] = useState(false)
	const [currentValue, setValue] = useState(0)

	const calculateTime = useCallback((secs) => {
		const minutes = Math.floor(secs / 60);
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
  		return `${minutes}:${returnedSeconds}`;
	})

	const changeCurrentTime = (value) => {
		const time = calculateTime(value)
		setCurrentTime(time)
		console.log(value);
	}

	
	useLayoutEffect(() => {
		
		console.log(audioRef);
		const time = calculateTime(audioRef.current.duration)
		// const buffered = Math.floor(audioRef.current.buffered.end(audioRef.current.buffered.lenght - 1))
		setDuration(time)
		setMaxSlide(audioRef.current.duration)
		if(isPlay){
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}
	}, [isPlay])
	return (

		<div className='fixed bottom-0 bg-emerald-400 w-full'>
			<Wrapper className="bg-red-300 flex justify-center pb-20">
				<audio onTimeUpdate={(e) => setCurrentTime(calculateTime(Math.floor(e.target.currentTime)))} ref={audioRef} src='https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/83.mp3' preload='metadata' loop/>
				<PlayIcon onClick={() => setPlay(!isPlay)} classNames="h-8 text-white"/>

				<div className='flex items-center w-full bg-blue-400 justify-between w-/'>
					<span id='current-time'>{currentTime}</span>
					<AudioSlider value={currentTime} classNames="w-4/5 flex items-center h-2 bg-red-500" max={maxSlider} handleChange={(current) => {changeCurrentTime(current.target.value)}}/>
					<span id='duration'>{duration}</span>
				</div>
				{/* <PauseIcon classNames="h-8"/> */}
				</Wrapper>
		</div>
	)
}

export default AudioPlayer