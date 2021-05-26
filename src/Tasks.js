import Task from './Task'


const Tasks = ({ tasks, onDelete, onDone }) => {


return (
	<>
		{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} onDone={onDone}/>
			))}
	</>
	)
}

export default Tasks