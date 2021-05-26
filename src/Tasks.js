import Task from './Task'


const Tasks = ({ tasks, onDelete, onDone, onChange }) => {


return (
	<>
		{tasks && tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} onDone={onDone} onChange={onChange}/>
			))}
	</>
	)
}

export default Tasks