import React , { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useLocalStorage from './useLocalStorage';



const Speech = () => {

	const [save, setSave] = useLocalStorage('save', ) //local storage

	const {
		transcript,
		interimTranscript,
		finalTranscript,
		resetTranscript,
	} = useSpeechRecognition()

	//print transcription
	useEffect(() => {
		if (finalTranscript !== '') {
			console.log(`Final transcript: ${finalTranscript}`)
		}
	}, [interimTranscript, finalTranscript])

	//browser support not adding --- only chrome
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
		// const deletingSavedNotes = (item, id) => {
		// 	console.log(`item ${typeof(item)} with id-${id}`)
		// 	const newNote = {id, ...item}
		// 	console.log(`task is ${typeof(newNote)} type`)
		// }

		

	return (
		<div>
			<div>
				<div className={transcript === '' ? 'none' : 'card'}>
					<div className='card-top'>
					{transcript}
					</div>
					<div className='card-bottom'>
						<button className={transcript === '' ? 'none' : 'custom-remove'} onClick={() => resetTranscript(transcript)}></button>
						<span className={transcript === '' ? 'none' : 'custom-text'}>delete</span>
						<button type='button' className={transcript === '' ? 'none' : 'custom-done'} onClick={handleSavedNotes}>
						</button>
						<span className={transcript === '' ? 'none' : 'custom-text'}>save</span>
					</div>
				</div>
			</div>
			<div className='voice-cards'>
				{save.map((item, id) => (
					<div key={`${item}${id}`} className={item ? 'voice-card' : 'none'}><span className='date'>{`task saved: ${date}`}</span><span className='voice-text'>{item}</span>
					{/* <button className={finalTranscript === '' ? 'none' : 'custom-remove-voice'}></button> */}
					</div>
				))}
			</div>
		</div>
	)
}

export default Speech
