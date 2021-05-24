 import Dark from './Dark'
 import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
 import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';


const Header = () => {

	const {listening, transcript} = useSpeechRecognition()
	// const [message, setMessage] = useState('')

/* 	const commands = [
		{
			command: 'What is day today',
			callback: () => setMessage(`Today is ${date}`) 
		},
	] */

	return (
		<header className='header'>
			<a href='index.html' className='title'>to d<span><Dark /></span></a>
			<span className={transcript === '' ? 'none' : 'custom-done'}>{transcript}</span>
			<div onClick={SpeechRecognition.startListening}  className='voice-icon'>
				{listening ?  <FaMicrophone className='fas fa-spinner fa-spin' /> :  <FaMicrophoneSlash />}
			</div>
		</header>
	)
}

export default Header