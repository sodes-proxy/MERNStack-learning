import { useState } from "react"
const AddTask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState(false)
    const submitTask=(e)=>{
        e.preventDefault()
        if(!text){
            alert('please add a task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={submitTask}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" placeholder="Add Date" value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
        
    )
}

export default AddTask
