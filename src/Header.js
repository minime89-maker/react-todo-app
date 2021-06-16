 import Dark from './Dark'
 import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
 import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Header = () => {

	const {listening} = useSpeechRecognition()

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