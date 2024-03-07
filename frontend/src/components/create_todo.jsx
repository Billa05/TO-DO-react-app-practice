import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    return (
    <div>
        <input type="text" placeholder="Title" onChange={(c)=>{setTitle(c.target.value)}}></input><br></br>
        <input type="text" placeholder="desc" onChange={(c)=>{setDesc(c.target.value)}}></input>
        <br></br>
        <button onClick={()=>{
            fetch("http://localhost:4000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:desc
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async(res)=>{
                const ress = await res.json();
                alert(ress);
            })
        }}> add todo</button>
    </div>
    )
}