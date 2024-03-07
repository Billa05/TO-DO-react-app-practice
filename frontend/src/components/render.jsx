export function Todos({todos}){
    return(
        <div>
            {todos.map((todo)=>{
                return(
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={()=>{
                            fetch("http://localhost:4000/completed",{
                                method:"PUT",
                                body:JSON.stringify({
                                    id:todo._id
                                }),
                                headers:{"Content-type":"application/json"}
                            })
                            .then(alert("todo updated"))
                        }}>{todo.completed == true ? "completed":"mark as done"}</button>
                    </div>
                )
            })}
        </div>
    )
}