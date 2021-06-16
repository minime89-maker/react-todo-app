import Task from './Task'

const Tasks = ({ tasks, onDelete, onDone }) => {

return (
	<>
		{tasks &&
			tasks.map((task) => {
				return (
				<Task key={task.id} task={task} onDelete={onDelete} onDone={onDone}/>
		)})}
	</>
	)
}

export default Tasks