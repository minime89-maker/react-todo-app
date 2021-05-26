import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import Footer from './/Footer'
import React from 'react'
import useLocalStorage from './useLocalStorage'
import Speech from './Speech'


function App() {
  const [tasks, setTasks] = useLocalStorage('tasks',[
  
    {
      id: 1,
      text: 'buy a coffe',
      done: false
    },
    {
      id: 2,
      text: 'learn React',
      done: true
    }
  ])

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

  // const textChanged = (id, text) => {
  //   console.log("in App.js id=" + id)
  //   console.log("in App.js text=" + text)
  //   Minja please add a setTasks mapping here for the correct ID task with the new text!!
  //   setTasks((text.map((ele) => ele.id === id ? ele : 'none')))
  // }


  return (
    <div className="container">
      <Header />
        <div className="cards">
          <AddTask onAdd={addTask} />
          <Tasks tasks={tasks} onDelete={deleteTask} onDone={doneTask} />
        </div>
        <Speech />
      <Footer />
    </div>
  );
}

export default App;
