import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
const App=()=> {
  const[tasks,setTasks]=useState([
    {id:1,text:'first task',day:'29/12/2021',reminder:true},
    {id:2,text:'second task',day:'30/12/2021',reminder:false}
])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
