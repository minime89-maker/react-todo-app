import ContentEditable from 'react-contenteditable'
import React, {Component} from 'react'
//Using Class Component because at the time when I was creating this Project, useRef Hook was not the cover on WBS Coding School

class Task extends Component{ 
	constructor(props) {
		super(props)
		this.contentEditable = React.createRef();
    	this.state = {html: this.props.task.text};
	}
	 handleChange = e => {
		this.setState = ({html: e.target.value})
		console.log("this.props.id, e.target.value = " + this.props.id + "," + e.target.value)
	};
	

	render = () => (
		<div className='card'>
			<ContentEditable
				className={`task ${this.props.task.done ? 'line' : ''}`}
				onBlur={this.handleChange} 
				html={this.props.task.text}
			/>
			<div className='card-bottom'>
				<button className='custom-remove' onClick={() => this.props.onDelete(this.props.task.id)} style={{ cursor: "pointer" }}></button>
				<span className='custom-text'>delete</span>
				<button className='custom-done' onClick={() => this.props.onDone
				(this.props.task.id)} html={this.props.task.text}
 				style={{ cursor: "pointer" }} ></button>
				<span className='custom-text' >done</span>
			</div>
		</div>
	)
}

export default Task
