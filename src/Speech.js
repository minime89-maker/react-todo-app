import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useLocalStorage from './useLocalStorage';


const Speech = () => {

	const [save, setSave] = useLocalStorage('save',[''] )

	const {
		transcript,
		finalTranscript,
		resetTranscript,
	} = useSpeechRecognition()

	if (!SpeechRecognition.browserSupportsSpeechRecognition) {
		alert('Please use another browser, I recomended Google Chrome for full exsperience...')
	}

	const handleSavedNotes = () => {
		setSave([...save, finalTranscript])
	}

	const date = new Date().toDateString()

	const deletingSavedNotes = (item, id) => {
		console.log(`item ${item} with id-${id}`)
		setSave(save.filter((ele) => ele.id !== id))
	}

	const crossLine = (e) => {
		const ele = e.target
		ele.classList.toggle('line')
	}
		

	return (
		<div>
			<div>
				<div className={transcript === '' ? 'none' : 'card'}>
					<div className='card-top'>
					{transcript}
					</div>
					<div className='card-bottom'>
						<button className={transcript === '' ? 'none' : 'custom-remove'} onClick={() => resetTranscript(transcript)}></button>
						<span className={transcript === '' ? 'none' : 'custom-text'}>remove</span>
						<button type='button' className={transcript === '' ? 'none' : 'custom-done'} onClick={handleSavedNotes}>
						</button>
						<span className={transcript === '' ? 'none' : 'custom-text'}>save</span>
					</div>
				</div>
			</div>
			<div className={!deletingSavedNotes ? 'none' : 'voice-card'} style={{display: !deletingSavedNotes ? 'none' : 'flex'}}>
				{save && save.map((item, index) => (
					<div className='voice-top' key={`${item}${index}`} >
						<span className='date'>{`task saved: ${date}`}</span>
						<span onClick={crossLine} className='voice-text'>{item}</span>
					</div>
				))}
				<button className= {deletingSavedNotes === false ? 'none'  : 'custom-remove-voice'}  onClick={deletingSavedNotes}></button>
			</div>
		</div>
	)
}

export default Speech
