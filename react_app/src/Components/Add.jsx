import { useState } from "react"
import axios from "axios"

function Add(){
    const [roll_no,setRoll_no] = useState('')
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/student/',{roll_no,name,age,email}).then(res=>{
            setRoll_no('')
            setName('')
            setAge('')
            setEmail('')
        }).catch(error=>console.log(error.message)
        )
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="number" name="roll_no" id="roll_no" value={roll_no} onChange={(e)=>setRoll_no(e.target.value)}/>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="number" name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
        
        </>
    )
}
export default Add