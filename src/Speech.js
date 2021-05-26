import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useLocalStorage from './useLocalStorage';



const Speech = () => {

	const [save, setSave] = useLocalStorage('save',[''] ) //local storage

	const {
		transcript,
		finalTranscript,
		resetTranscript,
	} = useSpeechRecognition()

	//browser support --- only chrome
	if (!SpeechRecognition.browserSupportsSpeechRecognition) {
		alert('Please use another browser, I recomended Google Chrome for full exsperience...')
	}

	//saving notes
	const handleSavedNotes = () => {
		setSave([...save, finalTranscript])
	}

	// show date
	const date = new Date().toDateString()

	//deleting notes
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
			<div className={deletingSavedNotes === false ? 'none' : 'voice-card'}>
				{save.map((item, id) => (
					<div className='voice-top' key={`${item}${id}`} >
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
