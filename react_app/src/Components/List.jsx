import { useEffect,useState } from "react"
import axios from 'axios'
import Add from "./Add"


function List(){
    const [data,SetData] = useState([])
    const [editing,setEditing] = useState(false)
    const [editdata,setEditData] = useState(null)
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/student/').then((res) =>{
            console.log(res.data);
            SetData(res.data)
        }).catch(error => console.log(error.message))
    },[])
    const Edit_dtls = (task) =>{
        setEditing(true)
        setEditData(task)
    }

    const updateDtls = (id,task) =>{
        setEditing(false)
        axios.put(`http://127.0.0.1:8000/api/student/${id}/`,task).then(res=>{
            SetData(data.map((prv)=>prv.id===id ? res.data : prv))
        }).catch(error =>console.log(error.message))
    }
    return(
        <div className="container">
            <h1>Student Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Roll_no</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.roll_no}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.email}</td>
                            <td><button className="btn btn-outline-info" onClick={()=>{Edit_dtls(value)}}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>{}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editing ? <EditForm curTask = {editdata} updataefun={updateDtls}/>:<Add/>}
        </div>
    )

}

const EditForm = ({curTask,updataefun})=>{
    const[task,setTask] = useState(curTask)
    const handleChange = (e) =>{
        const {name,value} = e.target 
        setTask({...task,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        updataefun(task.id,task)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="number" name="roll_no" id="roll_no" value={task.roll_no} onChange={handleChange}/>
            <input type="text" name="name" id="name" value={task.name} onChange={handleChange}/>
            <input type="number" name="age" id="age" value={task.age} onChange={handleChange}/>
            <input type="text" name="email" id="email" value={task.email} onChange={handleChange}/>
            <input type="submit" value="Update"/>
        </form>
    )
}
export default List