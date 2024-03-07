const  Express = require("express");
const app = Express();
const cors = require("cors")
const {createTodo,updateTodo} = require("./types");
const {todo} = require("./db");
app.use(cors());
app.use(Express.json());

app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "wrong inputs",
        })
        return;
    }

    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed:false,
    })
    res.json({
        msg:"ToDo created"
    })

})

app.get("/todos",async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "wrong inputs",
        })
        return;
    }
    await todo.findOneAndUpdate({
        _id: req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"todo updated"
    })
})

app.listen(4000)
