import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
const App=()=> {
  const[tasks,setTasks]=useState([
    {id:1,text:'first task',day:'29/12/2021',reminder:true},
    {id:2,text:'second task',day:'30/12/2021',reminder:false}
])
//delete Task
const delTask=(id) =>{
  setTasks(tasks.filter((task)=>task.id !==id));
  tasks.pop(id);
}
  return (
    <div className="container">
      <Header/>
      {tasks.length>0?<Tasks tasks={tasks} onDelete={delTask}/>:<h3>No task to show</h3>}
    </div>
  );
}

export default App;
