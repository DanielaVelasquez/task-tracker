const tasks = [
	{
		id: 1,
		text: "Don't forget to be awesome",
		day: 'Jan 26 at 11:00 am',
		reminder: true
	},
	{
		id: 2,
		text: "Don't forget to enjoy",
		day: 'Dec 4 at 02:00 am',
		reminder: true
	}
]

const Tasks = () => {
	return (
		<>
			{tasks.map((task) =>(
				<h3 key={task.id}> {task.text} </h3>
			))}
		</>
	)
}

export default Tasks
