import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import Footer from './/Footer'
import React from 'react'
import useLocalStorage from './useLocalStorage'
import Speech from './Speech'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  const [tasks, setTasks] = useLocalStorage('tasks',[])

  //delete task
  const deleteTask = (id) => {
    console.log('delete', 'id-' + id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //done task
  const doneTask = (id) => {
    console.log('done', 'id-' + id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task))
  }

  //add Task
  const addTask = (task) => {
    // creating a random id for storage, for testing purpose
    const id = Math.floor(Math.random() * 1000) + 1
    console.log(id)
    // adding new task using ... spread operator
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className="container">
        <Header />
          <div className="cards">
            <AddTask onAdd={addTask} />
            <Tasks tasks={tasks} onDelete={deleteTask} onDone={doneTask} />
          </div>
          <Speech />
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
