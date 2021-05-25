 import Dark from './Dark'
 import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
 import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useState } from 'react';


const Header = () => {

	const {listening} = useSpeechRecognition()

	// const commands = [
	// 	{
	// 		command: 'What is day today',
	// 		callback: () => setMessage(`Today is monday`) 
	// 	}
	// ]

	return (
		<header className='header'>
			<a href='index.html' className='title'>to d<span><Dark /></span></a>
			<div onClick={SpeechRecognition.startListening}  className='voice-icon'>
				{listening ?  <FaMicrophone className='fas fa-spinner fa-spin' /> :  <FaMicrophoneSlash />}
			</div>
		</header>
	)
}

export default Header