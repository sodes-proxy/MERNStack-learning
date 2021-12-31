import {useState} from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
const App=()=> {
  const[showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
    {id:1,text:'first task',day:'29/12/2021',reminder:true},
    {id:2,text:'second task',day:'30/12/2021',reminder:false}
])
//add task
const addTask=(task)=>{
  const id=tasks.length+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
//delete Task
const delTask=(id) =>{
  setTasks(tasks.filter((task)=>task.id !==id))
}
//Toggle Reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>/*ternary without else*/} 
      {tasks.length>0?<Tasks tasks={tasks} onDelete={delTask} onToggle={toggleReminder}/>:<h3>No task to show</h3>}
    </div>
  );
}

export default App;
