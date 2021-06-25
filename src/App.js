import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
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
	])

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=> 
        task.id === id? 
        {...task, reminder: !task.reminder}:
        task
      )
    )
  }

  const addTask = (task) =>{
    const id = Math.floor(Math.random()  * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {
        showAddTask &&
        <AddTask onAdd={addTask}/>
      }
      {
        tasks.length > 0 ?
        (<Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}/>):
        ('No tasks')
      }
    </div>
  );
}

export default App;