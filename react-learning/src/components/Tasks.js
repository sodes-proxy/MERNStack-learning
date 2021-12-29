import {useState} from 'react'
const Tasks = () => {
    const[tasks,setTasks]=useState([
        {id:1,text:'first task',day:'29/12/2021',reminder:true},
        {id:2,text:'second task',day:'30/12/2021',reminder:false}
    ])
    return (
        <>
        {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}      
        </>
    )
}

export default Tasks
