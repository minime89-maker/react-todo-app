import {useState} from 'react'


const AddTask = ({onAdd}) => {
	const [text, setText] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
		if(!text){
			alert('Please write a task !')
			return
		} else {
			onAdd({ text })
			setText('')
		}
	}

	return (
			<form className='input-title' onSubmit={onSubmit}>
				<input  type='text' placeholder='write a task ...' value={text} onChange={(e) => setText(e.target.value)}/>
			</form>
	)
}
	

export default AddTask
