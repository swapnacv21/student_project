import { useEffect, useState } from "react"
import axios from 'axios'

function List(){
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('').then((res)=>)
    })
    return(
        <div className="container">
            <h1>Display Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Roll_No</th>
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
                            <td>{value.completed ? 'completed' : 'not'}</td>
                            <td><button className="btn btn-outline-info" onClick={()=>{Edit_dtls(value)}}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>{}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editing ? <EditForm curTask = {editdata} updataefun={updateDtls}/>:null}
        </div>
    )
}

// const EditForm = ({curTask,updataefun})=>{
//     const[task,setTask] = useState(curTask)
//     const handleChange = (e) =>{
//         const {name,value} = e.target 
//         setTask({...task,[name]:value})
//     }
//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         updataefun(task.id,task)
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="title" id="title" value={task.task} onChange={handleChange}/>
//             <input type="text" name="description" id="description" value={task.description} onChange={handleChange}/>
//             <input type="submit" value="Update"/>

//         </form>
//     )
// }
export default List